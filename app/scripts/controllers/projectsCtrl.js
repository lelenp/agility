'use strict';

angular.module('agilityApp')
.controller('projectsCtrl', ['$scope','$modal','$state', 'projectService', function($scope, $modal, $state, projectService) {
    
    $scope.data = {
        projectList: []
    }
    
    initData();
    
    $scope.addProject = function(){
        var modalInstance = $modal.open({
            templateUrl: 'views/windows/addProjectWindow.html',
            controller: 'addProjectWindowCtrl',
            size: 'lg'
        });
        
        modalInstance.result.then(function () {
            getMyProjectList();
        });
        
    }
    
    $scope.goToProjectPage = function(projectId){
        $state.go('logged.projectPage', {'id': projectId});
    }   

    function getMyProjectList(){
        projectService.getMyProjectList(function(data){
            $scope.data.projectList = data;
        });
    }
    
    function initData(){
        getMyProjectList();
    }
    
}]);