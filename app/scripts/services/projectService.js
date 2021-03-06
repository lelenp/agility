'use strict';

angular.module('agilityApp')
.service('projectService', ['remoteService', function(remoteService) {
    
    this.getMyProjectList = function(handleResult) {
        remoteService.get('/lajira/rest/projects/my', handleResult);
    }; 
    
    this.addProject = function(data, handleResult) {
        remoteService.post('/lajira/rest/projects', data, handleResult);
    };
    
    this.getProject = function(projectId, handleResult) {
        remoteService.get('/lajira/rest/projects/description/' + projectId, handleResult);
    };
    
    this.getTask = function(taskId, handleResult) {
        remoteService.get('/lajira/rest/tasks/' + taskId, handleResult);
    };
    
    this.changeTaskState = function(taskId, taskState, handleResult) {
        remoteService.put('/lajira/rest/tasks/state/' + taskId, {'state': taskState},  handleResult);
    };
    
}]);
