'use strict';

describe('Controller: InfoCtrl', function () {

  // load the controller's module
  beforeEach(module('tmpApp'));

  var InfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfoCtrl = $controller('InfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
