'use strict';

/**
 * @ngdoc function
 * @name tmpApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the tmpApp
 */
angular.module('tmpApp')
    .controller('AllCtrl', function($location, $scope) {
        $scope.act = function(viewLocation) {
            return viewLocation === $location.path();
        };
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
