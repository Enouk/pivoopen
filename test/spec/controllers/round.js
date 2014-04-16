'use strict';

describe('Controller: RoundCtrl', function () {

  // load the controller's module
  beforeEach(module('golftournamentApp'));

  var RoundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoundCtrl = $controller('RoundCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
