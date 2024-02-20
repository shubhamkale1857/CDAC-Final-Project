using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TrainerUseCases.Models
{
    public partial class dac_projectContext : DbContext
    {
        public dac_projectContext()
        {
        }

        public dac_projectContext(DbContextOptions<dac_projectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Dailymeal> Dailymeals { get; set; } = null!;
        public virtual DbSet<Fooditem> Fooditems { get; set; } = null!;
        public virtual DbSet<Mealfooditemtransaction> Mealfooditemtransactions { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Trainer> Trainers { get; set; } = null!;
        public virtual DbSet<TrainerRequest> TrainerRequests { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=sql123;database=dac_project", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.29-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("admins");

                entity.HasIndex(e => e.UserId, "user_id_idx");

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(200)
                    .HasColumnName("address");

                entity.Property(e => e.Contact)
                    .HasMaxLength(45)
                    .HasColumnName("contact");

                entity.Property(e => e.Dob).HasColumnName("dob");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.Fname)
                    .HasMaxLength(45)
                    .HasColumnName("fname");

                entity.Property(e => e.Gender)
                    .HasMaxLength(45)
                    .HasColumnName("gender");

                entity.Property(e => e.Lname)
                    .HasMaxLength(45)
                    .HasColumnName("lname");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Admins)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("user_id3");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("categories");

                entity.HasIndex(e => e.CategoryName, "category_name_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(45)
                    .HasColumnName("category_name");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customers");

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Trainer, "trainer_idx");

                entity.HasIndex(e => e.UserId, "user_id_idx");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(150)
                    .HasColumnName("address");

                entity.Property(e => e.Contactno)
                    .HasMaxLength(13)
                    .HasColumnName("contactno");

                entity.Property(e => e.Dob).HasColumnName("dob");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.Fname)
                    .HasMaxLength(45)
                    .HasColumnName("fname");

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .HasColumnName("gender");

                entity.Property(e => e.Goal)
                    .HasMaxLength(45)
                    .HasColumnName("goal")
                    .HasDefaultValueSql("'maintain'");

                entity.Property(e => e.Height).HasColumnName("height");

                entity.Property(e => e.Lname)
                    .HasMaxLength(45)
                    .HasColumnName("lname");

                entity.Property(e => e.RegistrationDate).HasColumnName("registration_date");

                entity.Property(e => e.Trainer).HasColumnName("trainer");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Weight).HasColumnName("weight");

                entity.HasOne(d => d.TrainerNavigation)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.Trainer)
                    .HasConstraintName("trainer");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("user_id");
            });

            modelBuilder.Entity<Dailymeal>(entity =>
            {
                entity.HasKey(e => e.MealId)
                    .HasName("PRIMARY");

                entity.ToTable("dailymeals");

                entity.HasIndex(e => e.CustomerId, "customer_id_idx");

                entity.Property(e => e.MealId).HasColumnName("meal_id");

                entity.Property(e => e.Calories).HasColumnName("calories");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.Mealtype).HasColumnName("mealtype");

                entity.Property(e => e.Proteins).HasColumnName("proteins");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Dailymeals)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("customer_id");
            });

            modelBuilder.Entity<Fooditem>(entity =>
            {
                entity.HasKey(e => e.FoodId)
                    .HasName("PRIMARY");

                entity.ToTable("fooditems");

                entity.HasIndex(e => e.CategoryId, "FKs27esovm6xj6che1rqolwf4rb");

                entity.Property(e => e.FoodId).HasColumnName("food_id");

                entity.Property(e => e.Calories).HasColumnName("calories");

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.FoodName)
                    .HasColumnType("text")
                    .HasColumnName("food_name");

                entity.Property(e => e.Protein).HasColumnName("protein");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.Property(e => e.Unit)
                    .HasColumnType("text")
                    .HasColumnName("unit");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Fooditems)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FKs27esovm6xj6che1rqolwf4rb");
            });

            modelBuilder.Entity<Mealfooditemtransaction>(entity =>
            {
                entity.HasKey(e => new { e.MealId, e.FoodId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("mealfooditemtransaction");

                entity.HasIndex(e => e.FoodId, "fooditem_id_idx");

                entity.Property(e => e.MealId).HasColumnName("meal_id");

                entity.Property(e => e.FoodId).HasColumnName("food_id");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.HasOne(d => d.Food)
                    .WithMany(p => p.Mealfooditemtransactions)
                    .HasForeignKey(d => d.FoodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fooditem_id");

                entity.HasOne(d => d.Meal)
                    .WithMany(p => p.Mealfooditemtransactions)
                    .HasForeignKey(d => d.MealId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("meal_id");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("roles");

                entity.HasIndex(e => e.RoleName, "role_name_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.RoleId)
                    .ValueGeneratedNever()
                    .HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(45)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Trainer>(entity =>
            {
                entity.ToTable("trainers");

                entity.HasIndex(e => e.UserId, "user_id_idx");

                entity.Property(e => e.TrainerId).HasColumnName("trainer_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(150)
                    .HasColumnName("address");

                entity.Property(e => e.Contactno)
                    .HasMaxLength(13)
                    .HasColumnName("contactno");

                entity.Property(e => e.Dob).HasColumnName("dob");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.Experience).HasColumnName("experience");

                entity.Property(e => e.Fname)
                    .HasMaxLength(45)
                    .HasColumnName("fname");

                entity.Property(e => e.Gender)
                    .HasMaxLength(45)
                    .HasColumnName("gender");

                entity.Property(e => e.Lname)
                    .HasMaxLength(45)
                    .HasColumnName("lname");

                entity.Property(e => e.RegistrationDate).HasColumnName("registration_date");

                entity.Property(e => e.Specialization)
                    .HasMaxLength(45)
                    .HasColumnName("specialization");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Trainers)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("user_id1");
            });

            modelBuilder.Entity<TrainerRequest>(entity =>
            {
                entity.ToTable("trainer_requests");

                entity.HasIndex(e => e.CustomerId, "cust_id_idx");

                entity.HasIndex(e => e.TrainerId, "train_id_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.ReqStatus).HasColumnName("req_status");

                entity.Property(e => e.TrainerId).HasColumnName("trainer_id");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.TrainerRequests)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("cust_id");

                entity.HasOne(d => d.Trainer)
                    .WithMany(p => p.TrainerRequests)
                    .HasForeignKey(d => d.TrainerId)
                    .HasConstraintName("train_id");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.RoleId, "role_id_idx");

                entity.HasIndex(e => e.Username, "username_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasDefaultValueSql("'1'");

                entity.Property(e => e.Pass)
                    .HasMaxLength(200)
                    .HasColumnName("pass");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Username)
                    .HasMaxLength(45)
                    .HasColumnName("username");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("role_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
