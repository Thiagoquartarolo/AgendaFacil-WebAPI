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
    [RoutePrefix("api/cliente")]
    public class ClienteController : ApiController
    {
        protected ClienteServices _clienteService = new ClienteServices();

        // GET api/cliente
        public IEnumerable<Cliente> Get()
        {
            return _clienteService.GetAllClient();
        }

        // GET api/cliente/5
        public Cliente Get(int id)
        {
            return _clienteService.getClientById(id);
        }

        // POST api/cliente
        public void Post([FromBody]Cliente obj)
        {
            obj.Ativo = true;
            obj.DataNascimento = DateTime.Now;

            _clienteService.CadastrarCliente(obj);
        }

        [Route("editar")]
        public void PutEditar([FromBody]Cliente obj)
        {
            _clienteService.EditarCliente(obj);
        }

        [Route("bloquear")]
        public void PutBloquear([FromBody]Cliente obj)
        {
            obj.Ativo = false;
            _clienteService.EditarCliente(obj);
        }
    }
}
