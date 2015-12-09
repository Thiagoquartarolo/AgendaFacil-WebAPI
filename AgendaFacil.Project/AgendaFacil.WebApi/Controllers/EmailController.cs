using AgendaFacil.Domain.Entities;
using AgendaFacil.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.UI.WebControls;

namespace AgendaFacil.WebApi.Controllers
{
    [RoutePrefix("api/email")]
    public class EmailController : ApiController
    {
        protected EmailServices _emailServices;

        public EmailController()
        {
            _emailServices = new EmailServices();
        }

        //POST: api/Email
        public void Post([FromBody]Email email)
        {
            EmailServices.EnviarEmail(email.Emails, email.Conteudo);
        }




    }
}

