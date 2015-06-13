'use strict';

angular.module('agilityApp')
.service('projectService', ['remoteService', function(remoteService) {
    
    this.getProjectList = function(handleResult) {
        remoteService.get('/lajira/rest/projects', handleResult);
    }; 
    
    this.addProject = function(data, handleResult) {
        remoteService.post('/lajira/rest/projects', data, handleResult);
    };
    
}]);
