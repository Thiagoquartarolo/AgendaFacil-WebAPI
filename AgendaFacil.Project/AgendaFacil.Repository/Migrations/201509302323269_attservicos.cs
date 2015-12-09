namespace AgendaFacil.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class attservicos : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Tratamento", "Nome", c => c.String(maxLength: 8000, unicode: false));
            AddColumn("dbo.Tratamento", "Valor", c => c.Single(nullable: false));
            DropTable("dbo.Funcionario");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Funcionario",
                c => new
                    {
                        FuncionarioID = c.Int(nullable: false, identity: true),
                        Login = c.String(maxLength: 8000, unicode: false),
                        Senha = c.String(maxLength: 8000, unicode: false),
                        Nome = c.String(maxLength: 8000, unicode: false),
                        Telefone = c.String(maxLength: 8000, unicode: false),
                        Email = c.String(maxLength: 8000, unicode: false),
                        Endereco = c.String(maxLength: 8000, unicode: false),
                        DataNascimento = c.DateTime(nullable: false),
                        Ativo = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.FuncionarioID);
            
            DropColumn("dbo.Tratamento", "Valor");
            DropColumn("dbo.Tratamento", "Nome");
        }
    }
}
