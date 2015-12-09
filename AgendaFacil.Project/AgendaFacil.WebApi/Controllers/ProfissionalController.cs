using AgendaFacil.Domain.Entities;
using AgendaFacil.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AgendaFacil.WebApi.Controllers
{
    [RoutePrefix("api/profissional")]
    public class ProfissionalController : ApiController
    {
        protected ProfissionalServices _profissionalService = new ProfissionalServices();

        // GET api/profissional
        public IEnumerable<Profissional> Get()
        {
            return _profissionalService.getProfissionais();
        }

        // GET api/profissional/5
        public Profissional Get(int id)
        {
            return _profissionalService.getProfissionalById(id);
        }

        // GET api/profissional/validar
		[Route("validar")]
        public Profissional Get(string email, string senha)
        {
			return _profissionalService.getLoginProfisional(email, senha);
        }

        // POST api/profissional
        public void Post([FromBody]Profissional obj)
        {
            obj.Ativo = true;
            obj.DataNascimento = DateTime.Now;

            _profissionalService.CadastrarProfissional(obj);
        }

        [Route("editar")]
        public void PutEditar([FromBody]Profissional obj)
        {
            _profissionalService.EditarProfissional(obj);
        }

        [Route("bloquear")]
        public void PutBloquear([FromBody]Profissional obj)
        {
            obj.Ativo = false;
            _profissionalService.EditarProfissional(obj);
        }
        
        [Route("getProfissionaisAgendas")]
        public IEnumerable<object> getProfissionaisAgendas()
        {
            return _profissionalService.getProfissionaisAgendas();
        }
    }
}
