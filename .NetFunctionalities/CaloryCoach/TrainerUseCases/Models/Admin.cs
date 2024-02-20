using System;
using System.Collections.Generic;

namespace TrainerUseCases.Models
{
    public partial class Admin
    {
        public int AdminId { get; set; }
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public DateOnly? Dob { get; set; }
        public string? Gender { get; set; }
        public string? Contact { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public int? UserId { get; set; }

        public virtual User? User { get; set; }
    }
}
