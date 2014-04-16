'use strict';

describe('Directive: poNavbar', function () {

  // load the directive's module
  beforeEach(module('golftournamentApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<po-navbar></po-navbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the poNavbar directive');
  }));
});
