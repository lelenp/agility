'use strict';

angular.module('agilityApp')
.service('loginService', ['remoteService', function(remoteService) {
    
    this.logIn = function(data, handleResult) {
        remoteService.post('/lajira/rest/authentication/login', data, handleResult);
    };
    
    
    this.logout = function(handleResult) {
        remoteService.get('/lajira/rest/authentication/logout', handleResult);
    };
    
}]);
