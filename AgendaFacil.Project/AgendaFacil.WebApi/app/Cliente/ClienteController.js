'use strict';
app.controller('ClienteCtrl', ['$scope', 'clienteService', '$rootScope', function ($scope, clienteService, $rootScope) {

    $scope.cliente = {};
    $scope.listaClientes = {};


    activate();

    function activate()
    {
        _carregaLista();
    }
    

    function _carregaLista() {

        clienteService.getClientes().then(function (results) {
            $scope.listaClientes = results.data;
        }, function (error) {
            errorBox('Erro ao Carregar Lista de Clientes!');
        });

    };

    $scope.submit = function (cliente) {
        var $req;
        if (cliente.ClienteID) {
            $req = clienteService.editarCliente(cliente);
        } else {
            $req = clienteService.salvarCliente(cliente);
        }

        $req.success(function (resposta) {
            sucessBox('Cliente Salvo com Sucesso!');
            reloadPage();
        })
            .error(function () {
                errorBox('Erro ao Salvar Tratamento!');
                reloadPage();
            });

    };


    $scope.getClienteById = function (id) {
        clienteService.getClienteById(id).then(function (resposta) {
            $scope.cliente = resposta.data;
        }, function (error) {
            errorBox('Erro ao Selecionar Cliente!');
        });
    };

    $scope.bloquearCliente = function (cliente) {
        reloadPage(); reloadPage();
        var $req = clienteService.bloquearCliente(cliente);
        $req.success(function (resposta) {
            sucessBox('Cliente Bloqueado com Sucesso!');
        }).error(function () {
            errorBox('Erro ao Bloquear Cliente!');
        });
        reloadPage();
    };

    $scope.limparCampos = function () {
        $scope.cliente = "";
    };

    function errorBox(message) {
        $('#alertClass').removeClass('alert-info').addClass('alert-danger');
        AlertaMsg.show(message);
    };

    function sucessBox(message) {
        $('#alertClass').removeClass('alert-danger').addClass('alert-info');
        AlertaMsg.show(message);
    }

    function reloadPage() {
        $('#modShow').modal('hide');
        _carregaLista($scope);
    };

}]);