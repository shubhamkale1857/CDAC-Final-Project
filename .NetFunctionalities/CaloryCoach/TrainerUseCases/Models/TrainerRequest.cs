using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TrainerUseCases.Models
{
    public partial class TrainerRequest
    {
        public int Id { get; set; }
        public int? TrainerId { get; set; }
        public int? CustomerId { get; set; }
        public int? ReqStatus { get; set; }
        [JsonIgnore]
        public virtual Customer? Customer { get; set; }
        [JsonIgnore]
        public virtual Trainer? Trainer { get; set; }
    }
}
