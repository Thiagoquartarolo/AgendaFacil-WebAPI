'use strict'
app.factory('clienteService', ['$http', function ($http) {

    var clienteServiceFactory = {};

    var _getClientes = function () {
        return $http.get('api/cliente').then(function (results) {
            return results;
        });
    };

    var _getClienteById = function (c) {
        return $http.get('api/cliente/' + c, { headers: { 'Content-Type': 'application/json' } }).then(function (result) {
            return result;
        });
    };

    var _salvarCliente = function (c) {
        return $http.post('api/cliente', c, { headers: { 'Content-Type': 'application/json' } });
    };

    var _editarCliente = function (c) {
        return $http.put('api/cliente/editar', c, { headers: { 'Content-Type': 'application/json' } });
    };

    var _bloquearCliente = function (c) {
        return $http.put('api/cliente/bloquear', c, { headers: { 'Content-Type': 'application/json' } });
    };

    clienteServiceFactory.getClientes = _getClientes;
    clienteServiceFactory.getClienteById = _getClienteById;
    clienteServiceFactory.salvarCliente = _salvarCliente;
    clienteServiceFactory.editarCliente = _editarCliente;
    clienteServiceFactory.bloquearCliente = _bloquearCliente;


    return clienteServiceFactory;

}]);