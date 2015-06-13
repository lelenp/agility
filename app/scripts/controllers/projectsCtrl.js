'use strict';

angular.module('agilityApp')
.controller('projectsCtrl', ['$scope','$modal', function($scope, $modal) {
    
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
        console.log(getProjectList);
    }
    
    function initData(){
        getProjectList();
    }
    
}]);