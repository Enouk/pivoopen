'use strict';

angular.module('golftournamentApp')
  .controller('PlayersCtrl', function ($scope, $http) {
    $http.get('/data/players.json').success(function (result) {
      $scope.players = result;
    });
  });
