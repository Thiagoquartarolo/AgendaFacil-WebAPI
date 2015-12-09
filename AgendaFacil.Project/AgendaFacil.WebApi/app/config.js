(function () {
    'use strict';
    angular.module('app').run(function ($rootScope, $location) {
        var user = sessionStorage.getItem('usuario');
        $rootScope.user = null;
    
        if (user) {
            $rootScope.user = user;
            
        }


      
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.user === null) {
                $location.path('/');
            }
        });
    });
})();