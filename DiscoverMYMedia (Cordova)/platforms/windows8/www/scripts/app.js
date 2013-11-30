'use strict';

angular.module('discoverMymediaApp', ['DMMGeneralRuntimeService'])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            title: 'Featured'
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

        $rootScope.backTap = _.throttle(function () {
            $window.history.back();
        });

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
