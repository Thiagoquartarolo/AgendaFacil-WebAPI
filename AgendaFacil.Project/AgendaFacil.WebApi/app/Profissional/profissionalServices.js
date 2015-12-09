'use strict'
app.factory('profissionalService', ['$http', function ($http) {

    var profissionalServiceFactory = {};

    var _getProfissionais = function () {
        return $http.get('api/profissional').then(function (results) {
            return results;
        });
    };

    var _getProfissionalById = function (c) {
        return $http.get('api/profissional/' + c, { headers: { 'Content-Type': 'application/json' } }).then(function (result) {
            return result;
        });
    };

    var _salvarProfissional = function (c) {
        return $http.post('api/profissional', c, { headers: { 'Content-Type': 'application/json' } });
    };

    var _editarProfissional = function (c) {
        return $http.put('api/profissional/editar', c, { headers: { 'Content-Type': 'application/json' } });
    };

    var _bloquearProfissional = function (c) {
        return $http.put('api/profissional/bloquear', c, { headers: { 'Content-Type': 'application/json' } });
    };

    var _getLoginProfisional = function (c) {
        return $http.get('api/profissional/validar?email='+c.Email+'&senha='+c.Senha , { headers: { 'Content-Type': 'application/json' } });
    };

    var _getProfissionaisAgendas = function () {
        return $http.get('api/profissional/getProfissionaisAgendas').then(function (results) {
            return results;
        });
    };

    profissionalServiceFactory.getProfissionais = _getProfissionais;
    profissionalServiceFactory.salvarProfissional = _salvarProfissional;
    profissionalServiceFactory.editarProfissional = _editarProfissional;
    profissionalServiceFactory.getProfissionalById = _getProfissionalById;
    profissionalServiceFactory.bloquearProfissional = _bloquearProfissional;
    profissionalServiceFactory.getLoginProfisional = _getLoginProfisional;
    profissionalServiceFactory.getProfissionaisAgendas = _getProfissionaisAgendas;

    return profissionalServiceFactory;

}]);