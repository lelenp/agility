'use strict';

angular.module('agilityApp')
.controller('projectPageCtrl', ['$scope','$stateParams', 'projectService', function($scope, $stateParams, projectService) {
    
    $scope.data = {
        projectData: {}
    }
    
    initData();
    
    
    function initData(){
        var projectId = $stateParams.id;
        projectService.getProject(projectId, function(data){
           $scope.data.projectData = data;
        });
    }
    
}]);