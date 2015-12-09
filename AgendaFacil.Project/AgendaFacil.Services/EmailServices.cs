using AgendaFacil.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Services
{
   public class EmailServices
    {

        public static void EnviarEmail(String[] email, string conteudo)
        {

            EmailUtil.EnviarEmail(email, conteudo);
        }
    }
}
