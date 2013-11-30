'use strict';

describe('Service: Datafactory', function () {

  // load the service's module
  beforeEach(module('discoverMymediaApp'));

  // instantiate service
  var Datafactory;
  beforeEach(inject(function (_Datafactory_) {
    Datafactory = _Datafactory_;
  }));

  it('should do something', function () {
    expect(!!Datafactory).toBe(true);
  });

});
