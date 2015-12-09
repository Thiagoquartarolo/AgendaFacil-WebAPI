'use strict'
app.controller('LoginCtrl', ['$scope', '$location', '$route', '$rootScope', 'profissionalService', function ($scope, $location, $route, $rootScope, profissionalService) {
    
    $scope.authenticate = function (login) {
        profissionalService.getLoginProfisional(login)
        .success(function (data, status) {
            if (data == "null") {
                alert("Email/Senha incorretos!");
                $location.path('/');
                $route.reload();
            } else {
                var usuario = data;
                $rootScope.user = usuario.Nome;
                window.sessionStorage.setItem('usuario', usuario.Nome);
                $location.path('/home');
                $route.reload();
            }
        })
        .error(function () {
            alert("Email/Senha incorretos!");
        })
    };

    $scope.logOff = function()
    {
        $rootScope.user = null;
        sessionStorage.removeItem('usuario');
        $location.path('/');
        $route.reload();
    }

}]);