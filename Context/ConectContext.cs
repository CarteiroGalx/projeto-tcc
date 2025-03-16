using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Projeto_TCC.Models;

namespace Projeto_TCC.Context
{
    public class ConectContext : DbContext
    {
        public ConectContext(DbContextOptions<ConectContext> options) : base(options)
        {}

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Professor> Professores { get; set; }
    }
}
