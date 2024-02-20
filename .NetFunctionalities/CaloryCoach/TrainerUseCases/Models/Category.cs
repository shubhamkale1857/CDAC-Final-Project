using System;
using System.Collections.Generic;

namespace TrainerUseCases.Models
{
    public partial class Category
    {
        public Category()
        {
            Fooditems = new HashSet<Fooditem>();
        }

        public int CategoryId { get; set; }
        public string? CategoryName { get; set; }

        public virtual ICollection<Fooditem> Fooditems { get; set; }
    }
}
