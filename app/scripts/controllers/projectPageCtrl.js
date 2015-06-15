'use strict';

angular.module('agilityApp')
.controller('projectPageCtrl', ['$scope','$stateParams','$state', 'projectService', function($scope, $stateParams, $state, projectService) {
    
    $scope.data = {
        projectData: {}
    }
    
    initData();
    
    $scope.goToTaskPage = function(projectId){
        $state.go('logged.taskPage', {'id': projectId});
    } 
    
    function initData(){
        var projectId = $stateParams.id;
        projectService.getProject(projectId, function(data){
           $scope.data.projectData = data;
        });
    }
    
}]);