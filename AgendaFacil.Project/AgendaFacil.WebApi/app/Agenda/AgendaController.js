'use strict'
app.controller('AgendaCtrl', ['$scope', '$rootScope', 'agendaService', 'tratamentoService', 'profissionalService', 'clienteService', '$location', function ($scope, $rootScope, agendaService, tratamentoService, profissionalService, clienteService, $location) {

    $scope.listaServicos = {};

    $scope.listaProfissionais = {};

    $scope.lstAgenda = [{ 'nome': 'Thiago', 'data': '10/10/2010' }];

    $scope.listaAgendamentosFiltro = [];
    $scope.listaAgendamentos = [];
    $scope.listaClientes = {};
    $scope.agendamento = {};

    var dataAntiga = "";
    $scope.dataDiferente = function (data) {

        var dataFormatada = new Date(data).toDateString();
        if (dataFormatada != dataAntiga) {
            dataAntiga = dataFormatada;
            return true;
        }

        return false;
    }


    clienteService.getClientes().then(function (results) {
        $scope.listaClientes = results.data;
    }, function (error) {
        errorBox('Erro ao Carregar Lista de Clientes!');
    });

    $scope.clienteSelecionado = function (selected) {
        if (selected) {

            $scope.agendamento.ClienteID = selected.originalObject.ClienteID;
            $('#SelecionaServico').fadeIn();
        } else {
            console.log('cleared');
        }
    };

    $scope.servicoSelecionado = function (selected) {
        if (selected) {
            //alert('ID do Servico : ' + selected.originalObject.TratamentoId);
            $scope.agendamento.TratamentoId = selected.originalObject.TratamentoId;
            $('#selectProfissionais').fadeIn();
        } else {
            console.log('cleared');
        }
    };


    $scope.NovoAgendamento = function () {
        $('#selectProfissionais').fadeOut();
        $('#SelecionaServico').fadeOut();
        $('.ocultarHorario').fadeOut();
        $('#formCad').each(function () {
            this.reset();
        });

        $('#modCadastroAgenda').modal('show');

    }

    $scope.agendar = function (agendamento) {
        
        $scope.agendamento.DataInicio = new Date($('#datetimepicker6').data("DateTimePicker").date()).toGMTString();
        
        $scope.agendamento.DataTermino = new Date($('#datetimepicker7').data("DateTimePicker").date()).toGMTString();
        var $req;

        $req = agendaService.agendar(agendamento);
        $req.success(function (resposta) {
            $('#modCadastroAgenda').modal('hide');


        })
            .error(function () {
                alert('erro salvar agendamento');
            });
    }

    tratamentoService.getTratamentos().then(function (results) {

        $scope.listaServicos = results.data;
    });

    profissionalService.getProfissionais().then(function (results) {

        $scope.listaProfissionais = results.data;
    });


    var _carregaLista = function () {
        agendaService.getAgendamentos().then(function (results) {

            $scope.listaAgendamentos = results.data;
            $scope.listaAgendamentosFiltro = results.data;

        }, function (error) {
            errorBox('Erro ao Carregar Lista de Agendamentos!');
        });
    }

    var agendamentoItem = [];
    $scope.DetalhesConsulta = function (paciente) {
        agendamentoItem = paciente
        $('#idAgendamento').text(paciente.c.a.AgendaID)
        $('#Cliente').text('Cliente: ' + paciente.c.b.Nome);
        $('#Profissional').text('Profissional: Fazer INNER JOIN');
        $('#DataAgendamento').text('Data Agendamento: ' + paciente.c.a.DataInicio);
        $('#DescricaoServico').text('Descrição: ' + paciente.t.Descricao);
        $('#StatusConsulta').text('Status da Consulta: ' + paciente.c.a.Status);

        $('#modAlterarStatusAgendamento').modal('show');
    }

    $scope.ConfirmarConsulta = function ()
    {
        var $req;
        agendamentoItem.c.a.Status = 'Confirmado';
        $req = agendaService.alterarStatusAgendamento(agendamentoItem.c.a);
        $req.success(function (resposta) {
            
        })
            .error(function () {
                alert('erro alterar status do agendamento');
            });
     
    }

    $scope.PendendeConsulta = function () {
        var $req;
        agendamentoItem.c.a.Status = 'Pendente';
        $req = agendaService.alterarStatusAgendamento(agendamentoItem.c.a);
        $req.success(function (resposta) {
            
        })
            .error(function () {
                alert('erro alterar status do agendamento');
            });

    }

    $scope.CancelarConsulta = function () {
        var $req;
        agendamentoItem.c.a.Status = 'Cancelado';
        $req = agendaService.alterarStatusAgendamento(agendamentoItem.c.a);
        $req.success(function (resposta) {
            
        })
            .error(function () {
                alert('erro alterar status do agendamento');
            });

    }

    $scope.agendamentosHoje = function () {

        $scope.listaAgendamentosFiltro = $scope.listaAgendamentos.filter(function (data) {
            var dia = new Date(data.c.a.DataInicio);
            var hoje = new Date();
            if (dia.getDate() === hoje.getDate() && dia.getMonth() == hoje.getMonth())
            {
                console.log(dia);
            }
         
            if (dia.getDate() == hoje.getDate() && dia.getMonth() == hoje.getMonth()) return data;
        });
    }

    $scope.agendamentosSemana = function () {
        var hoje = new Date();
        var diasRestantesDaSemana = VerificaDiaDaSemana(hoje.getDay());
        var total = hoje.getDate() + diasRestantesDaSemana;

        $scope.listaAgendamentosFiltro = $scope.listaAgendamentos.filter(function (data) {
            var dia = new Date(data.c.a.DataInicio);

            if (dia.getDate() <= total && dia.getDate() >= (hoje.getDate() - hoje.getDay()) && dia.getMonth() == hoje.getMonth()) return data;

        });
    }


    $scope.agendamentosMes = function () {

        $scope.listaAgendamentosFiltro = $scope.listaAgendamentos.filter(function (data) {
            var dia = new Date(data.c.a.DataInicio);
            var hoje = new Date();

            if (dia.getMonth() == hoje.getMonth()) return data;
        });
    }

    $scope.agendamentosTodos = function () {

        $scope.listaAgendamentosFiltro = $scope.listaAgendamentos;
    }

    function VerificaDiaDaSemana(dia) {

        var diaRestantesDaSemana = 0;
        while (dia < 6) {
            diaRestantesDaSemana = diaRestantesDaSemana + 1;
            dia = dia + 1;
        }

        return diaRestantesDaSemana;
    }

    _carregaLista($scope);

}]);