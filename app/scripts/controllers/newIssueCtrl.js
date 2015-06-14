'use strict';

angular.module('agilityApp')
.controller('newIssueCtrl', ['$scope','$state', 'newIssueService','employeeService', function($scope, $state, newIssueService, employeeService) {
    
    $scope.data =  {
        newIssueData: {
            state: "NEW"
        },
        employeeList: [],
        projectList: []
    };
    
    initData();
    
    $scope.addIssue = function() {
        newIssueService.addIssue($scope.data.newIssueData, function(data){
            $state.go('logged.projects');
        });
    };
    
    function initData(){
        employeeService.getEmployeeList(function(data){
            $scope.data.employeeList = data;
        });    

        newIssueService.getProjectList(function(data){
            $scope.data.projectList = data;
        });
        
    }
    
}]);
