'use strict';

/**
 * @ngdoc overview
 * @name agilityApp
 * @description
 * # agilityApp
 *
 * Main module of the application.
 */
angular
  .module('agilityApp', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/mainPage");
      $stateProvider
        .state('logged', {
          url: '/logged',
          templateUrl: 'views/logged.html',
          controller: 'loggedCtrl'
        })
        .state('logged.mainPage', {
          url: '/mainPage',
          templateUrl: 'views/mainPage.html',
          controller: 'mainPageCtrl'
        })
        .state('logged.projects', {
          url: '/projects',
          templateUrl: 'views/projects.html',
          controller: 'projectsCtrl'
        })
        .state('logged.newIssue', {
          url: '/newIssue',
          templateUrl: 'views/newIssue.html',
          controller: 'newIssueCtrl'
        })
        .state('logged.timesheet', {
          url: '/timesheet',
          templateUrl: 'views/timesheet.html',
          controller: 'timesheetCtrl'
        });
  });
