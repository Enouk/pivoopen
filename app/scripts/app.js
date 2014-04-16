'use strict';

angular.module('golftournamentApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl'
      })
      .when('/tournaments', {
        templateUrl: 'views/tournaments.html',
        controller: 'TournamentsCtrl'
      })
      .when('/round', {
        templateUrl: 'views/round.html',
        controller: 'RoundCtrl'
      })
      .when('/score', {
        templateUrl: 'views/score.html',
        controller: 'ScoreCtrl'
      })
      .when('/player', {
        templateUrl: 'views/player.html',
        controller: 'PlayerCtrl'
      })
      .when('/tournament', {
        templateUrl: 'views/tournament.html',
        controller: 'TournamentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
