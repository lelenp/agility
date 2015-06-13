'use strict';

angular.module('agilityApp')
.service('employeeService', ['remoteService', function(remoteService) {
    
    this.getEmployeeList = function(handleResult) {
        remoteService.get('/lajira/rest/employees', handleResult);
    }; 
    
}]);
