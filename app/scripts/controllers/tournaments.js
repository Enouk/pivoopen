'use strict';

angular.module('golftournamentApp')
  .controller('TournamentsCtrl', function ($scope, $http) {
    $http.get('/data/tournaments.json').success(function (result) {
      $scope.tournaments = result;
    });
  });
