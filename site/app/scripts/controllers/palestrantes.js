'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:PalestrantesCtrl
 * @description
 * # PalestrantesCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
    .controller('PalestrantesCtrl', function($scope, $route, Palestrantes) {
        $scope.$route = $route;
        $scope.pale = Palestrantes.all();
    });
