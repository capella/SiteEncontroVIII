'use strict';

describe('Controller: AllCtrl', function () {

  // load the controller's module
  beforeEach(module('tmpApp'));

  var AllCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllCtrl = $controller('AllCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
