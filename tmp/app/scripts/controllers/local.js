'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:LocalCtrl
 * @description
 * # LocalCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
  .controller('LocalCtrl', function ($scope, $route) {
  	$scope.$route = $route;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
