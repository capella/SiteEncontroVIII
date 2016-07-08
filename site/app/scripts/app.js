'use strict';

/**
 * @ngdoc overview
 * @name tmpApp
 * @description
 * # tmpApp
 *
 * Main module of the application.
 */
angular
  .module('tmpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: 'main'
      })
      .when('/palestrantes', {
        templateUrl: 'views/palestrantes.html',
        controller: 'PalestrantesCtrl',
        controllerAs: 'palestrantes',
        activetab: 'palestrantes'
      })
      .when('/palestrantes/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        controllerAs: 'info',
        activetab: 'info'
      })
      .when('/programacao', {
        templateUrl: 'views/programacao.html',
        controller: 'ProgramacaoCtrl',
        controllerAs: 'programacao',
        activetab: 'programacao'
      })
      .when('/local', {
        templateUrl: 'views/local.html',
        controller: 'LocalCtrl',
        controllerAs: 'local',
        activetab: 'local'
      })
      .when('/feira', {
        templateUrl: 'views/feira.html',
        controller: 'FeiraCtrl',
        controllerAs: 'feira'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
