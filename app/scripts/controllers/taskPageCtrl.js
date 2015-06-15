'use strict';

angular.module('agilityApp')
.controller('taskPageCtrl', ['$scope','$stateParams', 'projectService', function($scope, $stateParams, projectService) {
    
    $scope.data = {
        priorityTranslate: {'LOW':'Low','HIGH':'High', 'NORMAL':'Normal'},
        statusTranslate: {'NEW':'To do','IN_WORK':'In progress', 'FINISHED':'Finished'},
        taskData: {}
    }
    
    
    initData();
    
    
    function initData(){
        var taskId = $stateParams.id;
        projectService.getTask(taskId, function(data){
           $scope.data.taskData = data;
        });
    }
    
}]);