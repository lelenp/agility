'use strict';

angular.module('agilityApp')
.controller('loggedCtrl', ['$scope','$modal', '$state', 'loginService', function($scope, $modal, $state, loginService) {
    
    $scope.logout = function(){
        loginService.logout(function(data){
           $state.go('login'); 
        });
    }
    
    $scope.addIssue = function(){
        var modalInstance = $modal.open({
            templateUrl: 'views/windows/newIssueWindow.html',
            controller: 'newIssueWindowCtrl',
            size: 'lg'
        });
        
        modalInstance.result.then(function () {
            getMyProjectList();
        });
        
    }
}]);
