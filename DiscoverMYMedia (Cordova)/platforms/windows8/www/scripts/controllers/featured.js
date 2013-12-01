'use strict';

angular.module('discoverMymediaApp')
  .controller('FeaturedCtrl', function ($scope) {
      $scope.activeSubNav = 0;
      $scope.changeSubNav = function (i) {
          $scope.activeSubNav = i;
      };

      $scope.activeNav = 4;
      $scope.changeNav = function (i) {
          $scope.activeNav = i;
      };

      
  });
