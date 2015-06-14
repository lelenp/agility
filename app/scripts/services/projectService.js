'use strict';

angular.module('agilityApp')
.service('projectService', ['remoteService', function(remoteService) {
    
    this.getMyProjectList = function(handleResult) {
        remoteService.get('/lajira/rest/projects/my', handleResult);
    }; 
    
    this.addProject = function(data, handleResult) {
        remoteService.post('/lajira/rest/projects', data, handleResult);
    };
    
}]);
