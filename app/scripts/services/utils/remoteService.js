'use strict';

angular.module('agilityApp')
.service('remoteService', ['$http', function($http) {
    
    // do usuniecia jak juz bedzie dzialac na discie  !!!!!
    var serverUrl = 'http://reviewpik.cloudapp.net:8080';
    
    this.post = function(url, data, handleResult, handleError) {
        $http.post(serverUrl + url, data).
          success(function(data, status, headers, config) {
                handleResult(data);
          }).
          error(function(data, status, headers, config) {
                if(!angular.isUndefined(handleError)){
                    handleError(data);
                } else {
                    console.log('Error in post data to URL: ' + serverUrl + url + ' ' + data);
                }
          });
    };
    
    this.get = function(url, handleResult, handleError) {
        $http.get(serverUrl + url).
          success(function(data, status, headers, config) {
                handleResult(data);
          }).
          error(function(data, status, headers, config) {
                if(!angular.isUndefined(handleError)){
                    handleError(data);
                } else {
                    console.log('Error in get data from URL: ' + serverUrl + url + ' ' + data);
                }
          });
    };
    
}]);
