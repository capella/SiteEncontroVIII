'use strict';

describe('Service: palestrantes', function () {

  // load the service's module
  beforeEach(module('tmpApp'));

  // instantiate service
  var palestrantes;
  beforeEach(inject(function (_palestrantes_) {
    palestrantes = _palestrantes_;
  }));

  it('should do something', function () {
    expect(!!palestrantes).toBe(true);
  });

});
