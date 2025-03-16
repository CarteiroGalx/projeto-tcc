using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_TCC.Models
{
    public class Usuario
    {
        public int id { get; set; }
        [Required]
        public string nome { get; set; }
        [Required]
        public string senha { get; set; }
        public int celular { get; set; }
    }
}