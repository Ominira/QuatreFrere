'use strict';

angular.module('discoverMymediaApp', [])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  })
   .config(['$compileProvider', function ($compileProvider) {
       $compileProvider.urlSanitizationWhitelist(/^\s*(https?|file|ms-appx):/);
   }]);
