'use strict';

angular.module('agilityApp')
.controller('taskPageCtrl', ['$scope','$stateParams','$modal', 'projectService', function($scope, $stateParams, $modal, projectService) {
    
    $scope.data = {
        priorityTranslate: {'LOW':'Low','HIGH':'High', 'NORMAL':'Normal'},
        statusTranslate: {'NEW':'To do','IN_WORK':'In progress', 'FINISHED':'Finished'},
        taskData: {}
    }
    
    
    initData();
    
    $scope.logTime = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/windows/timelogWindow.html',
            controller: 'timelogWindowCtrl',
            size: 'lg',
            resolve: {
                taskId: function () {
                    return $stateParams.id;
                }
            }
        });
        
        modalInstance.result.then(function () {
            getTask($stateParams.id);
        });
        
    }
    
    $scope.changeTaskStatus = function(taskState) {
        var stateToSet = null;
        if(taskState == 'IN_WORK'){
            stateToSet = 'FINISHED';
        } else if(taskState == 'NEW'){
            stateToSet = 'IN_WORK';
        }
        projectService.changeTaskState($stateParams.id, stateToSet, function(data){
            getTask($stateParams.id);
        });
    }
    
    
    function initData(){
        getTask($stateParams.id);

    }
    
    function getTask(taskId){
        projectService.getTask(taskId, function(data){
           $scope.data.taskData = data;
        });
    }
    
}]);