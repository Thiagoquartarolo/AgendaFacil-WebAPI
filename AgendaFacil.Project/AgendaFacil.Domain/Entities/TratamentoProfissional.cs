using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Domain.Entities
{
    public class TratamentoProfissional
    {
        public int TratamentoProfissionalId { get; set; }
        public int TratamentoId { get; set; }
        public int ProfissionalId { get; set; }

        public virtual Tratamento Tratamento { get; set; }
        public virtual Profissional Profissional { get; set; }
    }
}
