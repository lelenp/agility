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
    'ui.bootstrap',
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');
    
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'loginCtrl'
        })
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
        })
        .state('logged.projectPage', {
          url: '/projectPage/:id',
          templateUrl: 'views/projectPage.html',
          controller: 'projectPageCtrl'
        })        
        .state('logged.timelog', {
          url: '/timelog',
          templateUrl: 'views/timelog.html',
          controller: 'timelogCtrl'
        });
  });
