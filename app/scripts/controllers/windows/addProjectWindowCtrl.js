'use strict';

angular.module('agilityApp')
.controller('addProjectWindowCtrl', ['$scope','$modalInstance','employeeService','projectService', function($scope, $modalInstance, employeeService, projectService) {
    
    $scope.data = {
        projectData: {},
        employeeList: []
    }
    
    initData();
    
    $scope.addProject = function(){
        projectService.addProject($scope.data.projectData, function(data){
            $modalInstance.close();
        });
    }
    
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }
    
    function initData(){
        employeeService.getEmployeeList(function(data){
            $scope.data.employeeList = data;
        });       
    }
    
}]);