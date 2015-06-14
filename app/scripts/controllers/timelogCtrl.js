'use strict';

angular.module('agilityApp')
.controller('timelogCtrl', ['$scope', '$filter', '$location', 'logTimeService', function($scope, $filter, $location, logTimeService) {

    $scope.data =  {
        logTime: {}
    };

    //do potrzebne jest przekierowanie na strone logowania czasu z query parametrem taskId
    $scope.logTime = function() {
        logTimeService.logTime($scope.data.logTime, $location.search().taskId, function(data){
            console.log(data);
        });
    };


}]);
