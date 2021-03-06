'use strict';

describe('Controller: TournamentCtrl', function () {

  // load the controller's module
  beforeEach(module('golftournamentApp'));

  var TournamentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TournamentCtrl = $controller('TournamentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
