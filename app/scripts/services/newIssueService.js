'use strict';

angular.module('agilityApp')
.service('newIssueService', ['remoteService', function(remoteService) {
    
    this.addIssue = function(data, handleResult) {
        remoteService.post('/lajira/rest/tasks', data, handleResult);
    };
    
    this.getProjectList = function(handleResult) {
        remoteService.get('/lajira/rest/projects', handleResult);
    }; 
    
}]);
