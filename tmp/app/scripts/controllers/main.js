'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
  .controller('MainCtrl', function ($scope, $route, palestrantes) {
  	$scope.$route = $route;
    $scope.palestrantes = palestrantes.all();
  });
