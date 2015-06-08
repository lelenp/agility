'use strict';

angular.module('agilityApp')
.service('remoteService', ['$http', function($http) {
    
    this.post = function(url, data, handleResult) {
        $http.post(url, data).
          success(function(data, status, headers, config) {
                handleResult(data);
          }).
          error(function(data, status, headers, config) {
                handleResult(data);
          });
    };
    
    this.get = function() {
        console.log("getMethod");
    };
    
}]);
