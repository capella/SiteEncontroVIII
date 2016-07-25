'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
    .controller('InfoCtrl', function($scope, $routeParams, Palestrantes) {
        $scope.palestrante = Palestrantes.id($routeParams.id);
    });
