using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TrainerUseCases.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Dailymeals = new HashSet<Dailymeal>();
            TrainerRequests = new HashSet<TrainerRequest>();
        }

        public int CustomerId { get; set; }
        public int? Trainer { get; set; }
        public string Fname { get; set; } = null!;
        public string? Lname { get; set; }
        public string? Email { get; set; }
        public string? Contactno { get; set; }
        public DateOnly Dob { get; set; }
        public double? Height { get; set; }
        public double? Weight { get; set; }
        public string? Gender { get; set; }
        public int? UserId { get; set; }
        public DateOnly? RegistrationDate { get; set; }
        public string? Address { get; set; }
        public string Goal { get; set; } = null!;
        [JsonIgnore]
        public virtual Trainer? TrainerNavigation { get; set; }
        [JsonIgnore]
        public virtual User? User { get; set; }
        public virtual ICollection<Dailymeal> Dailymeals { get; set; }
        public virtual ICollection<TrainerRequest> TrainerRequests { get; set; }
    }
}
