'use strict'
app.factory('emailService', ['$http', function ($http) {
    var emailServiceFactory = {};



    var _enviarEmail = function (emails) {
        return $http.post('api/email', emails, { headers: { 'Content-Type': 'application/json' } });
    }

    emailServiceFactory.enviarEmail = _enviarEmail;

    return emailServiceFactory;


}]);