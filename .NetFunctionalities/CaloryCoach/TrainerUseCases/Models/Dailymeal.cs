using System;
using System.Collections.Generic;

namespace TrainerUseCases.Models
{
    public partial class Dailymeal
    {
        public Dailymeal()
        {
            Mealfooditemtransactions = new HashSet<Mealfooditemtransaction>();
        }

        public int MealId { get; set; }
        public int? CustomerId { get; set; }
        public DateOnly? Date { get; set; }
        public int? Mealtype { get; set; }
        public int? Calories { get; set; }
        public int? Proteins { get; set; }

        public virtual Customer? Customer { get; set; }
        public virtual ICollection<Mealfooditemtransaction> Mealfooditemtransactions { get; set; }
    }
}
