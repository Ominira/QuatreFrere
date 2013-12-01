'use strict';

angular.module('discoverMymediaApp', ['DMMGeneralRuntimeService'])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            title: 'Featured'
        })
        .when('/featured', {
            templateUrl: 'views/featured.html',
            controller: 'FeaturedCtrl',
            title: 'Programme Media'
        })
        .when('/media', {
            templateUrl: 'views/media.html',
            controller: 'MediaCtrl',
            title: 'Shows'
        })
        .otherwise({
            redirectTo: '/'
        });
  })
   .config(['$compileProvider', function ($compileProvider) {
       $compileProvider.urlSanitizationWhitelist(/^\s*(https?|file|ms-appx):/);
   }])
    .run(['$rootScope', '$location', '$window','$route', function ($rootScope, $location, $window, $route) {
        $rootScope.goTo = _.debounce(function (where) {
            $location.path('/' + where);
        }, 500, true);

        $rootScope.backTap = function () {
            $window.history.back();
        };

        $rootScope.isShown = false;

        $rootScope.toggleMenu = function () {
            $rootScope.isShown = !$rootScope.isShown;
        }

        $rootScope.$on('$routeChangeSuccess', function (event, next) {
            if ($rootScope.isShown == true) {
                $rootScope.isShown = false
            }
            $rootScope.title = $route.current.title
        })
    }]);
