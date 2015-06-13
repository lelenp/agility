'use strict';

angular.module('agilityApp')
.service('logTimeService', ['remoteService', function(remoteService) {

    this.logTime = function(data, taskId, handleResult) {
        remoteService.post('/lajira/tasks/time/' + taskId, data, handleResult);
    };

}]);
