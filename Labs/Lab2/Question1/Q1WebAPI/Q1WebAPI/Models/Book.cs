using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Q1WebAPI.Models
{
    public class Book
    {
        [Key]

        public long Id { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }

        [MaxLength(512)]
        public string Description { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public double Price { get; set; }

        [MaxLength(128)]
        public string Note { get; set; }
    }
}
