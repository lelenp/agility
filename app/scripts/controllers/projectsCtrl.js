'use strict';

angular.module('agilityApp')
.controller('projectsCtrl', ['$scope','$modal', function($scope, $modal) {
    
    $scope.addProject = function(){
        var modalInstance = $modal.open({
          templateUrl: 'views/windows/addProjectWindow.html',
          controller: 'addProjectWindowCtrl',
          size: 'lg'
        });
    }
    
}]);