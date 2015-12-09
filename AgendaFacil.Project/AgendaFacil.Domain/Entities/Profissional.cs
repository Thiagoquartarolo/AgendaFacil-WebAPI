using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Domain.Entities
{
    public class Profissional
    {
        public int ProfissionalId { get; set; }
        public String Nome { get; set; }
        public String Telefone { get; set; }
        public String Email { get; set; }
        public String Endereco { get; set; }
        public String Senha { get; set; }
        public DateTime DataNascimento { get; set; }
        public IEnumerable<TratamentoProfissional> TratamentoServices { get; set; }
        public bool Ativo { get; set; }
    }
}
