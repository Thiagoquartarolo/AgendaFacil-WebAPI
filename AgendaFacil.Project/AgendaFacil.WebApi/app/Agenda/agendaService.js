'use strict'
app.factory('agendaService', ['$http', function ($http) {

    var agendaServiceFactory = {};



    var _agendar = function (agendamento) {
        return $http.post('api/agenda', agendamento, { headers: { 'Content-Type': 'application/json' } });
    }

    var _getAgendamentos = function () {
        return $http.get('api/agenda').then(function (results) {
            return results;
        });
    }

    var _obterAgendamentosMes = function () {
        return $http.get('api/agenda/obterAgendamentosMes').then(function (results) {
            return results;
        });
    }
    var _alterarStatusAgendamento = function (a) {
        return $http.put('api/agenda/alterarStatusAgendamento', a, { headers: { 'Content-Type': 'application/json' } });
    }

    var _obterGanhosAnoAtual = function () {
        return $http.get('api/agenda/obterGanhosAnoAtual').then(function (results) {
            return results;
        });
    }

    agendaServiceFactory.agendar = _agendar;

    agendaServiceFactory.getAgendamentos = _getAgendamentos;

    agendaServiceFactory.obterAgendamentosMes = _obterAgendamentosMes;

    agendaServiceFactory.obterGanhosAnoAtual = _obterGanhosAnoAtual;

    agendaServiceFactory.alterarStatusAgendamento = _alterarStatusAgendamento;

    return agendaServiceFactory;


}]);