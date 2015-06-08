'use strict';

angular.module('agilityApp')
.service('newIssueService', ['remoteService', function(remoteService) {
    
    this.addIssue = function(data, handleResult) {
        remoteService.post('/addIssue', data, handleResult);
    };
    
}]);
