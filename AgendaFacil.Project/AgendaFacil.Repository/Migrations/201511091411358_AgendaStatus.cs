namespace AgendaFacil.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AgendaStatus : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Agenda", "Status", c => c.String(maxLength: 8000, unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Agenda", "Status");
        }
    }
}
