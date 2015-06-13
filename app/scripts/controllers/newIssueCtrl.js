'use strict';

angular.module('agilityApp')
.controller('newIssueCtrl', ['$scope', 'newIssueService', function($scope, newIssueService) {
    
    $scope.data =  {
        newIssueData: {},
        employeeList: [],
        projectList: []
    };
    
    initData();
    
    $scope.addIssue = function() {
        newIssueService.addIssue($scope.data.newIssueData, function(data){
            console.log(data);
        });
    };
    
    function initData(){
        newIssueService.getEmployeeList(function(data){
            $scope.data.employeeList = data;
        });    

        newIssueService.getProjectList(function(data){
            $scope.data.projectList = data;
        });
        
    }
    
}]);
