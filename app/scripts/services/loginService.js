'use strict';

angular.module('agilityApp')
.service('loginService', ['remoteService', function(remoteService) {
    
    this.logIn = function(data, handleResult) {
        remoteService.post('/lajira/authentication/login', data, handleResult);
    };
    
}]);
