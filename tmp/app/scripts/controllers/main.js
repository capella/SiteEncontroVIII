'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
  .controller('MainCtrl', function ($scope, $route) {
  	$scope.$route = $route;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
