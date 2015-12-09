using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AgendaFacil.Domain.Entities;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
namespace AgendaFacil.Repository.Context
{
	public class AgendaFacilContext : DbContext
	{

		public AgendaFacilContext()
			: base("DB_AgendaFacil")
		{
			Database.SetInitializer<AgendaFacilContext>(null);
            var ensureDLLIsCopied = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
 
        }

		public DbSet<Cliente> Clientes { get; set; }
		public DbSet<Agenda> Agendas { get; set; }
		public DbSet<Tratamento> Tratamento { get; set; }
        public DbSet<Profissional> Profissionais { get; set; }

		

		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
			modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
			modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();

			modelBuilder.Properties<string>().Configure(p => p.HasColumnType("varchar"));



		}
	}
}
