'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:ProgramacaoCtrl
 * @description
 * # ProgramacaoCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
    .controller('ProgramacaoCtrl', function($scope, $route, Palestrantes) {
        $scope.$route = $route;
        $scope.pale = Palestrantes.all();
    });
