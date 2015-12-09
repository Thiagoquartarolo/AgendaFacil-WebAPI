using AgendaFacil.Domain.Entities;
using AgendaFacil.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;

namespace AgendaFacil.WebApi.Controllers
{
    [RoutePrefix("api/agenda")]
    public class AgendaController : ApiController
    {
        protected AgendaServices _agendaServices = new AgendaServices();
        // GET: api/Agenda
        public IEnumerable<Object> Get()
        {
            return _agendaServices.ListaAgendamentos();
        }

        // GET: api/Agenda/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Agenda
        public void Post([FromBody]Agenda a)
        {
            a.Status = "Pendente";
            _agendaServices.CadastrarAgendamento(a);
        }

        // PUT: api/Agenda/5
        [Route("alterarStatusAgendamento")]
        public void Put(Agenda a)
        {
            _agendaServices.alterarStatusAgendamento(a);
        }

        // DELETE: api/Agenda/5
        public void Delete(int id)
        {
        }

        // Gráfico - Agendamentos do Mês Atual
        [Route("obterAgendamentosMes")]
        [HttpGet]
        public IEnumerable<Object> obterAgendamentosMes()
        {
            return _agendaServices.obterAgendamentosMes();
        }

        // Gráfico - Ganhos do Ano Atual
        [Route("obterGanhosAnoAtual")]
        [HttpGet]
        public IEnumerable<Object> obterGanhosAnoAtual()
        {
            return _agendaServices.obterGanhosAnoAtual();
        }
    }
}
