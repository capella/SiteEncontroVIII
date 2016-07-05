'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:ProgramacaoCtrl
 * @description
 * # ProgramacaoCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
  .controller('ProgramacaoCtrl', function ($scope, $route) {
  	$scope.$route = $route;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
