'use strict';

/**
 * @ngdoc function
 * @name agilityApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agilityApp
 */
angular.module('agilityApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
