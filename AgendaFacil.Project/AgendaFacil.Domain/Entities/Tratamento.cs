using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Domain.Entities
{
    public class Tratamento
    {
        public int TratamentoId { get; set; }
        public int ProfissionalId { get; set; }

        public ICollection<TratamentoProfissional> TratamentoProfissional { get; set; }
        public String Nome { get; set; }
        public String Descricao { get; set; }
        public bool Ativo { get; set; }
        public float Valor { get; set; }
    }
}
