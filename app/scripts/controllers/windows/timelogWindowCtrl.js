'use strict';

angular.module('agilityApp')
.controller('timelogWindowCtrl', ['$scope', '$modalInstance', 'logTimeService','taskId', function($scope, $modalInstance, logTimeService, taskId) {

    $scope.data =  {
        logTime: {}
    };

    
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }
    
    $scope.logTime = function() {
        logTimeService.logTime($scope.data.logTime, taskId, function(data){
	        $modalInstance.dismiss('cancel');
        });
    };


}]);
