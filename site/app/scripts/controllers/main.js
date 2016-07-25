'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
    .controller('MainCtrl', function($scope, $route, Palestrantes) {
        $scope.$route = $route;
        $scope.palestrantes = Palestrantes.all();
    });
