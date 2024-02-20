using System;
using System.Collections.Generic;

namespace TrainerUseCases.Models
{
    public partial class Trainer
    {
        public Trainer()
        {
            Customers = new HashSet<Customer>();
            TrainerRequests = new HashSet<TrainerRequest>();
        }

        public int TrainerId { get; set; }
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public string? Email { get; set; }
        public string? Contactno { get; set; }
        public string? Specialization { get; set; }
        public int? Experience { get; set; }
        public DateOnly? Dob { get; set; }
        public DateOnly? RegistrationDate { get; set; }
        public string? Gender { get; set; }
        public string? Address { get; set; }
        public int? UserId { get; set; }

        public virtual User? User { get; set; }
        public virtual ICollection<Customer> Customers { get; set; }
        public virtual ICollection<TrainerRequest> TrainerRequests { get; set; }
    }
}
