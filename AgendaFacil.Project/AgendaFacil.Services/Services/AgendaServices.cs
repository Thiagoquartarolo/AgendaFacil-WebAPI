using AgendaFacil.Domain.Entities;
using AgendaFacil.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Services.Services
{
    public class AgendaServices
    {

        protected AgendaRepository _agendaRepository = new AgendaRepository();

        public void CadastrarAgendamento(Agenda obj)
        {
            _agendaRepository.Add(obj);
        }

        public IEnumerable<Object> ListaAgendamentos()
        {
            return _agendaRepository.ListaAgendamentos();
        }

        public IEnumerable<Object> obterAgendamentosMes()
        {
            return _agendaRepository.obterAgendamentosMes();
        }

        public IEnumerable<Object> obterGanhosAnoAtual()
        {
            return _agendaRepository.obterGanhosAnoAtual();
        }

        public void alterarStatusAgendamento(Agenda obj)
        {
            _agendaRepository.alterarStatusAgendamento(obj);
        }
    }
}
