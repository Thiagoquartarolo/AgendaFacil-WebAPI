using AgendaFacil.Domain.Entities;
using AgendaFacil.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Services.Services
{
    public class TratamentoServices
    {
        protected RepositoryBase<Tratamento> _repositoryBase = new RepositoryBase<Tratamento>();


        public void CadastrarTratamento(Tratamento obj)
        {
            _repositoryBase.Add(obj);
        }

        public IEnumerable<Tratamento> GetAllTratamentos()
        {
            return _repositoryBase.GetAll();
        }

        public Tratamento getTratamentoByID(int id)
        {
            return _repositoryBase.GetById(id);
        }

        public void Editar(Tratamento obj)
        {
            _repositoryBase.Update(obj);
        }

        public void Deletar(Tratamento obj)
        {
            _repositoryBase.Remove(obj);
        }
    }
}