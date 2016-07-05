'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:PalestrantesCtrl
 * @description
 * # PalestrantesCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
  .controller('PalestrantesCtrl', function ($scope, $route) {
  	$scope.$route = $route;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
