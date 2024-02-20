using System;
using System.Collections.Generic;

namespace TrainerUseCases.Models
{
    public partial class Mealfooditemtransaction
    {
        public int MealId { get; set; }
        public int FoodId { get; set; }
        public int? Qty { get; set; }

        public virtual Fooditem Food { get; set; } = null!;
        public virtual Dailymeal Meal { get; set; } = null!;
    }
}
