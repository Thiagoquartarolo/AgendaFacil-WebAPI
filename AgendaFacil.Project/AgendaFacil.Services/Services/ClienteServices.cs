using AgendaFacil.Domain.Entities;
using AgendaFacil.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Services.Services
{
    public class ClienteServices
    {
        protected ClienteRepository _clienteRepository = new ClienteRepository();

        public IEnumerable<Cliente> GetAllClient()
        {
            return _clienteRepository.GetAllClientes();
        }

        public Cliente getClientById(int id)
        {
            return _clienteRepository.GetById(id);
        }

        public void CadastrarCliente(Cliente obj)
        {
            _clienteRepository.Add(obj);
        }

        public void EditarCliente(Cliente obj)
        {
            _clienteRepository.Update(obj);
        }
    }
}