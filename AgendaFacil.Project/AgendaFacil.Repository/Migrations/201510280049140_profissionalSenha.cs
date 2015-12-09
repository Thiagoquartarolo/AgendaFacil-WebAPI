namespace AgendaFacil.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class profissionalSenha : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Profissional", "Senha", c => c.String(maxLength: 8000, unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Profissional", "Senha");
        }
    }
}
