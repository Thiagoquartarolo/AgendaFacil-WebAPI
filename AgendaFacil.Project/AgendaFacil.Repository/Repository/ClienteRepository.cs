using AgendaFacil.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Repository.Repository
{
    public class ClienteRepository : RepositoryBase<Cliente>
    {
        public IEnumerable<Cliente> GetAllClientes()
        {
            return Db.Clientes.Where(c => c.Ativo != false).ToList();
        }
    }
}
