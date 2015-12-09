using AgendaFacil.Domain.Entities;
using AgendaFacil.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Services.Services
{
    public class ProfissionalServices
    {
        protected ProfissionalRepository _profissionalRepository = new ProfissionalRepository();

        public IEnumerable<Profissional> getProfissionais()
        {
            return _profissionalRepository.GetAllProfissionais();
        }

        public Profissional getProfissionalById(int id)
        {
            return _profissionalRepository.GetById(id);
        }

		public Profissional getLoginProfisional(string email, string senha)
        {
			return _profissionalRepository.GetLogin(email, senha);
        }

        public void CadastrarProfissional(Profissional obj)
        {
            _profissionalRepository.Add(obj);
        }

        public void EditarProfissional(Profissional obj)
        {
            _profissionalRepository.Update(obj);
        }
        public IEnumerable<object> getProfissionaisAgendas()
        {
            return _profissionalRepository.getProfissionaisAgendas();
        }
    }
}
