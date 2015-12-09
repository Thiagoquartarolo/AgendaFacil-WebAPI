'use strict';
app.factory('tratamentoService', ['$http', function ($http) {


    var listaServiceFactory = {};

    //Carregando tratamentos
    var _getTratamentos = function () {
        return $http.get('api/tratamento').then(function (results) {
            return results;
        });
    };



    //Gravavando Tratamento
    var _gravarTratamento = function (c) {
        return $http.post('api/tratamento', c, { headers: { 'Content-Type': 'application/json' } });
    };

    //Pegando Tratamento por ID
    var _getTratamentoByID = function (c) {
        return $http.get('api/tratamento/' + c, { headers: { 'Content-Type': 'application/json' } }).then(function (result) {
            return result;
        });
    };

    //Editando Tratamento
    var _editarTratamento = function (c) {
        return $http.put('api/tratamento/editar', c, { headers: { 'Content-Type': 'application/json' } });
    };

    //Bloqueando Tratamento
    var _bloquearTratamento = function (c) {
        return $http.put('api/tratamento/bloquear', c, { headers: { 'Content-Type': 'application/json' } });
    };

    listaServiceFactory.getTratamentos = _getTratamentos;
    listaServiceFactory.gravarTratamento = _gravarTratamento;
    listaServiceFactory.getTratamentoByID = _getTratamentoByID;
    listaServiceFactory.editarTratamento = _editarTratamento;
    listaServiceFactory.bloquearTratamento = _bloquearTratamento;
    return listaServiceFactory;

}]);