namespace AgendaFacil.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class agenda : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Agenda", new[] { "FK_ClienteID_ClienteID" });
            DropIndex("dbo.Agenda", new[] { "FK_TratamentoID_TratamentoId" });
            RenameColumn(table: "dbo.Agenda", name: "FK_ClienteID_ClienteID", newName: "ClienteID");
            RenameColumn(table: "dbo.Agenda", name: "FK_TratamentoID_TratamentoId", newName: "TratamentoId");
            AddColumn("dbo.Agenda", "DataInicio", c => c.DateTime(nullable: false));
            AddColumn("dbo.Agenda", "DataTermino", c => c.DateTime(nullable: false));
            AddColumn("dbo.Agenda", "ProfissionalId", c => c.Int(nullable: false));
            AlterColumn("dbo.Agenda", "ClienteID", c => c.Int(nullable: false));
            AlterColumn("dbo.Agenda", "TratamentoId", c => c.Int(nullable: false));
            CreateIndex("dbo.Agenda", "ClienteID");
            CreateIndex("dbo.Agenda", "TratamentoId");
            DropColumn("dbo.Agenda", "DataAgendamento");
            DropColumn("dbo.Profissional", "Senha");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Profissional", "Senha", c => c.String(maxLength: 8000, unicode: false));
            AddColumn("dbo.Agenda", "DataAgendamento", c => c.DateTime(nullable: false));
            DropIndex("dbo.Agenda", new[] { "TratamentoId" });
            DropIndex("dbo.Agenda", new[] { "ClienteID" });
            AlterColumn("dbo.Agenda", "TratamentoId", c => c.Int());
            AlterColumn("dbo.Agenda", "ClienteID", c => c.Int());
            DropColumn("dbo.Agenda", "ProfissionalId");
            DropColumn("dbo.Agenda", "DataTermino");
            DropColumn("dbo.Agenda", "DataInicio");
            RenameColumn(table: "dbo.Agenda", name: "TratamentoId", newName: "FK_TratamentoID_TratamentoId");
            RenameColumn(table: "dbo.Agenda", name: "ClienteID", newName: "FK_ClienteID_ClienteID");
            CreateIndex("dbo.Agenda", "FK_TratamentoID_TratamentoId");
            CreateIndex("dbo.Agenda", "FK_ClienteID_ClienteID");
        }
    }
}
