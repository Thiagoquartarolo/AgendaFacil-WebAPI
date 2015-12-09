'use strict';
app.controller('EmailCtrl', ['$scope', 'clienteService', 'emailService', '$rootScope', function ($scope, clienteService, emailService, $rootScope) {

    $scope.clientesEmails = {};
    
   
    $scope.enviarEmail = function (client) {
        var clientes = $('.list-left ul li');
        var Emails = [];

        //Pegar Email dos Clientes Selecionados
        for (var i = 0; i < clientes.length; i++) {
            Emails.push(clientes[i].id);
        }
        //Conteudo da Mensagem (body)
        var Conteudo = $('#msgConteudo').val();
        var object = { Emails, Conteudo };

        var $req;

        $req = emailService.enviarEmail(object);
        $req.success(function (resposta) {
            alert('email enviado');
        })
          .error(function () {
              alert('falha ao enviar email');
          });

    };


    clienteService.getClientes().then(function (results) {
        $scope.clientesEmails = results.data;
    }, function (error) {
        errorBox('Erro ao Carregar Lista de Clientes!');
    });



}]);