using System;
using System.Collections.Generic;

namespace TrainerUseCases.Models
{
    public partial class User
    {
        public User()
        {
            Admins = new HashSet<Admin>();
            Customers = new HashSet<Customer>();
            Trainers = new HashSet<Trainer>();
        }

        public int UserId { get; set; }
        public string? Username { get; set; }
        public string? Pass { get; set; }
        public int? RoleId { get; set; }
        public int? Active { get; set; }

        public virtual Role? Role { get; set; }
        public virtual ICollection<Admin> Admins { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
        public virtual ICollection<Trainer> Trainers { get; set; }
    }
}
