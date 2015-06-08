'use strict';

angular.module('agilityApp')
.controller('newIssueCtrl', ['$scope', 'newIssueService', function($scope, newIssueService) {
    
    $scope.data =  {
        newIssueData: {}
    };
    
    $scope.addIssue = function() {
        newIssueService.addIssue($scope.data.newIssueData, function(data){
            console.log(data);
        });
    };
    
    
}]);
