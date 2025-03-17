using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Projeto_TCC.Context;

namespace Projeto_TCC.Controllers
{
    [Route("[controller]")]
    public class UsuarioController : Controller
    {
        private readonly ConectContext _context;
         public UsuarioController(ConectContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            var Usuario = _context.Professores.ToList();
            return View(Usuario);
        }

    }
}