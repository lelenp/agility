'use strict';

angular.module('agilityApp')
.service('logTimeService', ['remoteService', function(remoteService) {

    this.logTime = function(data, taskId, handleResult) {
        remoteService.put('/lajira/rest/tasks/spentTime/' + taskId, data, handleResult);
    };

}]);
