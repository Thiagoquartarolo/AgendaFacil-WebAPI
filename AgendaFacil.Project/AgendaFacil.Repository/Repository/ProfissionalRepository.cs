using AgendaFacil.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Repository.Repository
{
    public class ProfissionalRepository : RepositoryBase<Profissional>
    {
        public IEnumerable<Profissional> GetAllProfissionais()
        {
            return Db.Profissionais.Where(c => c.Ativo != false).ToList();
        }

		public Profissional GetLogin(string email, string senha)
        {
            return Db.Profissionais.Where(c => c.Email == email && c.Senha == senha).FirstOrDefault();
        }

        public IEnumerable<object> getProfissionaisAgendas()
        {
            var query = Db.Agendas.Join(Db.Profissionais, a => a.ProfissionalId, p => p.ProfissionalId, (a, p) => new { a.TratamentoId, p.Nome }).
                GroupBy(p => p.Nome);
            return query;
        }
    }
}
