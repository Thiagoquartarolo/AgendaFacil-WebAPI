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
    [RoutePrefix("api/tratamento")]
    public class TratamentoController : ApiController
    {
        protected TratamentoServices _tratamentoService = new TratamentoServices();
        // GET api/tratamento
        public IEnumerable<Tratamento> Get()
        {
            return _tratamentoService.GetAllTratamentos();
        }

        // GET api/tratamento/5
        public Tratamento Get(int id)
        {
            return _tratamentoService.getTratamentoByID(id);

        }

        // POST api/tratamento
        public void Post([FromBody]Tratamento obj)
        {
            obj.Ativo = true;
            _tratamentoService.CadastrarTratamento(obj);
            
        }

        // PUT api/tratamento/5
        [Route("editar")]
        public void PutEditar([FromBody]Tratamento obj)
        {
            _tratamentoService.Editar(obj);
        }

         [Route("bloquear")]
        public void PutBloquear([FromBody]Tratamento obj)
        {
            obj.Ativo = false;
            _tratamentoService.Editar(obj);
        }
    }
}
