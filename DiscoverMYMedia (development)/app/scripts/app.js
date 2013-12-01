'use strict';

angular.module('discoverMymediaApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/featured', {
        templateUrl: 'views/featured.html',
        controller: 'FeaturedCtrl'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
