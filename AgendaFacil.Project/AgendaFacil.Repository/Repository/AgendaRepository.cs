using AgendaFacil.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Repository.Repository
{
   public class AgendaRepository : RepositoryBase<Agenda>
    {

        public IEnumerable<Object> ListaAgendamentos()
        {
			var query = Db.Agendas.Join(Db.Clientes, a => a.ClienteID, b => b.ClienteID, (a, b) => new { a, b }).
				Join(Db.Tratamento, c => c.a.TratamentoId, t => t.TratamentoId, (c,t) => new {t,c}); 

            return query;
        }

        public IEnumerable<Object> obterAgendamentosMes()
        {
            var query = Db.Agendas.Join(Db.Tratamento, a => a.TratamentoId, b => b.TratamentoId, (a, b) => new { a, b }).
                Where(
                    r =>
                        r.a.DataInicio.Month.Equals(DateTime.Now.Month) &&
                        r.a.DataInicio.Year.Equals(DateTime.Now.Year)
                )
                .GroupBy(g => g.b.Descricao)
                .Select(g => new { g.Key, Count = g.Count() });

            return query;
        }

        public IEnumerable<Object> obterGanhosAnoAtual()
        {
            var query = Db.Agendas.Join(Db.Tratamento, a => a.TratamentoId, b => b.TratamentoId, (a, b) => new { a, b }).
                Where(
                    r =>
                        r.a.DataInicio.Year.Equals(DateTime.Now.Year)
                )
                .GroupBy(g => g.a.DataInicio.Month)
                .Select(g => new { g.Key, Sum = g.Sum(s => s.b.TratamentoId) });

            return query;
        }

        public void alterarStatusAgendamento(Agenda obj)
        {
            Db.Entry(obj).State = EntityState.Modified;
            Db.SaveChanges();
        }
    }
}
