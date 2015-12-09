'use strict';
app.controller('TratamentoCtrl', ['$scope', 'tratamentoService', '$rootScope', 'profissionalService', function ($scope, tratamentoService, $rootScope, profissionalService) {
    $scope.listaTratamento = {};
    $scope.limparCampos = function () {
        $scope.servico = "";
    };


        profissionalService.getProfissionais().then(function (results) {
            $scope.listaProfissionais = results.data;
        });
  
    function reloadPage() {
        $('#modShow').modal('hide');
        _carregaLista($scope);
    };

    function errorBox(message) {
        $('#alertClass').removeClass('alert-info').addClass('alert-danger');
        AlertaMsg.show(message);
    };

    function sucessBox(message) {
        $('#alertClass').removeClass('alert-danger').addClass('alert-info');
        AlertaMsg.show(message);
    }

    //Carregando Tratamentos
    var _carregaLista = function ($scope) {
        tratamentoService.getTratamentos().then(function (results) {
            $scope.listaTratamento = results.data;
        }, function (error) {
            errorBox('Erro ao Carregar Lista de Tratamento!');
        });
    };


    _carregaLista($scope);

    //Inserindo novo Serviço
    $scope.salvarDados = function (servico) {
        var $req;

        if(servico.TratamentoId)
          $req = tratamentoService.editarTratamento(servico);
        else
          $req = tratamentoService.gravarTratamento(servico);
          
        $req.success(function (resposta) {
            sucessBox('Tratamento Salvo com Sucesso!');
            reloadPage();
        })
        .error(function () {
            errorBox('Erro ao Salvar Tratamento!');
            reloadPage();
        });
    };

    //Recuperando Tratamento por ID
    $scope.getTratamentoByID = function (id) {
        tratamentoService.getTratamentoByID(id).then(function (resposta) {
            $scope.servico = resposta.data;
        }, function (error) {
            errorBox('Erro ao recuperar Tratamento');
            reloadPage();
        });
    };


    //Bloqueando Tratamento
    $scope.bloquearTratamento = function (servico) {
        var $req = tratamentoService.bloquearTratamento(servico);
        $req.success(function (resposta) {
            sucessBox('Tratamento Bloqueado com Sucesso!');
            reloadPage();
        }).error(function () {
            errorBox('Erro ao Bloquear Tratamento!');
            reloadPage();
        });
    };



}]);