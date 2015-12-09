'use strict';
app.controller('ProfissionalCtrl', ['$scope', 'profissionalService', '$rootScope', function ($scope, profissionalService, $rootScope) {

    $scope.profissional = {};
    $scope.listaProfissionais = {};

    var _carregaLista = function ($scope) {
        profissionalService.getProfissionais().then(function (results) {
            $scope.listaProfissionais = results.data;
        }, function (error) {
            errorBox('Erro ao Carregar Lista de Profissionais!');
        });
    };


    _carregaLista($scope);

    

    $scope.submit = function (profissional) {
        var $req;
        if (profissional.ProfissionalId) {
            $req = profissionalService.editarProfissional(profissional);
        } else {
            $req = profissionalService.salvarProfissional(profissional);
        }
       
        $req.success(function (resposta) {
            sucessBox('Profissional Salvo com Sucesso!');
            reloadPage();
        }).error(function () {
            errorBox('Erro ao Salvar Profissional!');
            reloadPage();
        });
    };

   // var array = [];
   //$scope.cad = function(addtxt)
   //{
   //    function searchStringInArray(addtxt, array) {
   //        for (var j = 0; j < array.length; j++) {
   //            if (array[j].match(addtxt)) return true;
   //        }
   //        return false;
   //    }

   //    if (searchStringInArray(addtxt, array)){
   //        alert('este profissional já possui este serviço cadastrado!!')
   //        return;
   //    }


   //    alert(addtxt);
   //    array.push(addtxt);
   //    var p = document.createElement('span');
   //    var div = document.getElementById('txtServicos');
   //    p.textContent = addtxt + ",";
   //    p.style.marginRight = "10px";
   //    p.style.backgroundColor = "rgba(242, 244, 255, 0.509804)";
   //    p.style.color = "#474C93";
   //    p.style.boxShadow = '1px 1px 3px #838489';
    
   //    div.appendChild(p);
   //    //document.getElementById('txtServicos').innerText =  document.getElementById('txtServicos').textContent +", " +  addtxt;
   // }

    $scope.getProfissionalById = function (id) {
        profissionalService.getProfissionalById(id).then(function (resposta) {
            $scope.profissional = resposta.data;
        }, function (error) {
            errorBox('Erro ao Selecionar Profissional!');
        });
    };

    $scope.bloquearProfissional = function (profissional) {
        reloadPage(); reloadPage(); reloadPage();
        var $req = profissionalService.bloquearProfissional(profissional);
        $req.success(function (resposta) {
            sucessBox('Profissional Bloqueado com Sucesso!');
        }).error(function () {
            errorBox('Erro ao Bloquear Profissional!');
        });
        reloadPage();
    };

    $scope.limparCampos = function () {
        $scope.profissional = "";
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