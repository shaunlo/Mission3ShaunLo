using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "The entry of Assignments score must be between 0 and 100")]
        public float Assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "The entry of Group_Project score must be between 0 and 100")]
        public float Group_Project { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "The entry of Quizzes score must be between 0 and 100")]
        public float Quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "The entry of Exams score must be between 0 and 100")]
        public float Exams { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "The entry of INTEX score must be between 0 and 100")]
        public float INTEX { get; set; }

    }
}
