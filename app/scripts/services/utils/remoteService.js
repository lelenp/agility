'use strict';

angular.module('agilityApp')
.service('remoteService', ['$http', function($http) {
    
    // do usuniecia jak juz bedzie dzialac na discie  !!!!!
    var serverUrl = 'http://len.iem.pw.edu.pl:9432';
    
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
    
    this.get = function() {
        console.log('getMethod');
    };
    
}]);
