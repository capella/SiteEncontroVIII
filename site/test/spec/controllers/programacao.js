'use strict';

describe('Controller: ProgramacaoCtrl', function () {

  // load the controller's module
  beforeEach(module('tmpApp'));

  var ProgramacaoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgramacaoCtrl = $controller('ProgramacaoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
