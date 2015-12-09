using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;

namespace AgendaFacil.Repository
{
    public class EmailUtil
    {
        public static void EnviarEmail(String[] email, string conteudo)
        {
            MailMessage objEmail = new MailMessage();

            objEmail.From = new MailAddress("bcp.suporte@gmail.com.br");

            objEmail.ReplyTo = new MailAddress("bcp.suporte@gmail.com.br");

            foreach (var item in email)
            {
                objEmail.To.Add(item);
            }
            
            objEmail.Priority = MailPriority.Normal;

            objEmail.IsBodyHtml = true;
            objEmail.Subject = "Teste Envio de Email-marketing";

            objEmail.Body = " " + conteudo;

            //ENVIO DE IMAGEM
            //var contentID = "Image";
            //var inlineLogo = new Attachment(@conteudo);
            //inlineLogo.ContentId = contentID;
            //inlineLogo.ContentDisposition.Inline = true;
            //inlineLogo.ContentDisposition.DispositionType = DispositionTypeNames.Inline;
            //objEmail.Attachments.Add(inlineLogo);
            //objEmail.Body += " <br /><br /><img src=\"cid:" + contentID + "\" height=\"auto\" width=\"auto\"><br />";

            objEmail.SubjectEncoding = Encoding.GetEncoding("ISO-8859-1");
            objEmail.BodyEncoding = Encoding.GetEncoding("ISO-8859-1");


            SmtpClient objSmtp = new SmtpClient();

            objSmtp.Host = "smtp.gmail.com";
            objSmtp.EnableSsl = true;
            objSmtp.Port = 587;
            string user = "bcp.suporte@gmail.com";
            string senha = "suportehcor";


            objSmtp.Credentials = new NetworkCredential(user, senha);
            objSmtp.Send(objEmail);

        }
    }
}
