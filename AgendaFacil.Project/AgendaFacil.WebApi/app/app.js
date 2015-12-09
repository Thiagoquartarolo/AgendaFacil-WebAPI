var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'chart.js', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'angucomplete-alt']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider

	.when('/', {
	    templateUrl: 'app/Login/login.html',
	    controller: 'LoginCtrl',
	})
    .when('/home', {
        templateUrl: 'app/Home/home.html',
        controller: 'HomeCtrl',
    })
	.when('/cliente', {
	    templateUrl: 'app/Cliente/cliente.html',
	    controller: 'ClienteCtrl',
	})
	.when('/agenda', {
	    templateUrl: 'app/Agenda/agenda.html',
	    controller: 'AgendaCtrl',
	})
	.when('/profissionais', {
	    templateUrl: 'app/Profissional/profissional.html',
	    controller: 'ProfissionalCtrl',
	})
    .when('/tratamento', {
        templateUrl: 'app/Tratamento/tratamento.html',
        controller: 'TratamentoCtrl',
    }).
    when('/email', {
        templateUrl: 'app/Email/email.html',
        controller: 'EmailCtrl',
    })
	.otherwise({ redirectTo: '/' });
});