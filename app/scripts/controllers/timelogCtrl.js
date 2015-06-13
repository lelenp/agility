'use strict';

angular.module('agilityApp')
.controller('timelogCtrl', ['$scope', function($scope) {


    $scope.data =  {
            logTime: {
              finishedDate = $filter("date")(Date.now(), 'mm-dd-yyyy')
            },
    };

    $scope.data.

    //do potrzebne jest przekierowanie na strone logowania czasu z query parametrem taskId
    $scope.logTime = function() {
            logTimeService.logTime($scope.data.logTime, $location.search().taskId, function(data){
                console.log(data);
            });
    };


}]);
