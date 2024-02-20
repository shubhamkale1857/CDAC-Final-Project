using System;
using System.Collections.Generic;

namespace TrainerUseCases.Models
{
    public partial class Fooditem
    {
        public Fooditem()
        {
            Mealfooditemtransactions = new HashSet<Mealfooditemtransaction>();
        }

        public int FoodId { get; set; }
        public string? FoodName { get; set; }
        public int? Qty { get; set; }
        public string? Unit { get; set; }
        public int? Calories { get; set; }
        public int? Protein { get; set; }
        public int? CategoryId { get; set; }

        public virtual Category? Category { get; set; }
        public virtual ICollection<Mealfooditemtransaction> Mealfooditemtransactions { get; set; }
    }
}
