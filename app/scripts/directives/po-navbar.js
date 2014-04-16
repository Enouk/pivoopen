'use strict';

angular.module('golftournamentApp')
  .controller('poNavbarCtrl', function ($scope, $location) {
    $scope.match = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.contains = function (viewLocation) {
      //return viewLocation === $location.path();
      return $location.path().indexOf(viewLocation) !== -1;
    };
  });

angular.module('golftournamentApp')
  .directive('poNavbar', function () {
    return {
      controller: 'poNavbarCtrl',
      templateUrl: 'views/navbar.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4),
    };
  });
