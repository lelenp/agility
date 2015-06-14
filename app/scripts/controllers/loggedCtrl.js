'use strict';

angular.module('agilityApp')
.controller('loggedCtrl', ['$scope','$state', 'loginService', function($scope, $state, loginService) {
    
    $scope.logout = function(){
        loginService.logout(function(data){
           $state.go('login'); 
        });
    }
    
}]);
