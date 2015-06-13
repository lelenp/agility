'use strict';

angular.module('agilityApp')
.controller('projectsCtrl', ['$scope','$modal','projectService', function($scope, $modal, projectService) {
    
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
            getProjectList();
        });
        
    }
    
    function getProjectList(){
        projectService.getProjectList(function(data){
            $scope.data.projectList = data;
        });
    }
    
    function initData(){
        getProjectList();
    }
    
}]);