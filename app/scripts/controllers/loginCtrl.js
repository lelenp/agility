'use strict';

angular.module('agilityApp')
.controller('loginCtrl', ['$scope','$state','loginService', function($scope, $state, loginService) {
    $scope.data =  {
        userData: {}
    };
    
    $scope.logIn = function() {
        loginService.logIn($scope.data.userData, function(data){
            goToMainPage();
        });
    };
    
    function goToMainPage(){
        $state.go('logged.mainPage');
    }
    
}]);
