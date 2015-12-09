using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Domain.Entities
{
	public class Agenda
	{
  
        public int AgendaID { get; set; }
		public DateTime DataInicio { get; set; }
        public DateTime DataTermino { get; set; }
        public int ProfissionalId { get; set; }
        public int ClienteID { get; set; }
        public int TratamentoId { get; set; }
        public Cliente FK_ClienteID { get; set; }
		public Tratamento FK_TratamentoID { get; set; }
        public String Status { get; set; }
        //public float Valor { get; set; }
    }
}
