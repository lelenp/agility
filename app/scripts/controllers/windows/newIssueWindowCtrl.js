'use strict';

angular.module('agilityApp')
.controller('newIssueWindowCtrl', ['$scope','$modalInstance', '$state', 'newIssueService','employeeService', function($scope, $modalInstance, $state, newIssueService, employeeService) {
    
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
            $modalInstance.dismiss('cancel');
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
    
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }
    
}]);
