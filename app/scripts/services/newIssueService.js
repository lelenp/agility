'use strict';

angular.module('agilityApp')
.service('newIssueService', ['remoteService', function(remoteService) {
    
    this.addIssue = function(data, handleResult) {
        remoteService.post('/addIssue', data, handleResult);
    };
    
    this.getEmployeeList = function(handleResult) {
        remoteService.get('/lajira/employees', handleResult);
    }; 
    
    this.getProjectList = function(handleResult) {
        remoteService.get('/lajira/projects', handleResult);
    }; 
    
}]);
