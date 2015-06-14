'use strict';

angular.module('agilityApp')
.service('remoteService', ['$http','$rootScope', function($http, $rootScope) {
    
    // do usuniecia jak juz bedzie dzialac na discie  !!!!!
    var serverUrl = 'http://reviewpik.cloudapp.net:8080';
    
    this.post = function(url, data, handleResult, handleError) {
        showLoadingInfo();
        $http.post(serverUrl + url, data).
          success(function(data, status, headers, config) {
                handleResult(data);
                hideLoadingInfo();
          }).
          error(function(data, status, headers, config) {
                if(!angular.isUndefined(handleError)){
                    handleError(data);
                } else {
                    console.log('Error in post data to URL: ' + serverUrl + url + ' ' + data);
                }
                hideLoadingInfo();
          });
    };
    
    this.get = function(url, handleResult, handleError) {
        showLoadingInfo();
        $http.get(serverUrl + url).
          success(function(data, status, headers, config) {
                handleResult(data);
                hideLoadingInfo();
          }).
          error(function(data, status, headers, config) {
                if(!angular.isUndefined(handleError)){
                    handleError(data);
                } else {
                    console.log('Error in get data from URL: ' + serverUrl + url + ' ' + data);
                }
                hideLoadingInfo();
          });
    };
    
    function showLoadingInfo(){
        $rootScope.loadingInfo = true;
    }
    
    function hideLoadingInfo(){
        $rootScope.loadingInfo = false;
    }
    
}]);
