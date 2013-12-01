'use strict';

angular.module('discoverMymediaApp')
  .controller('MainCtrl', function ($scope, $http, RuntimeProvider, RuntimeValues) {

      $scope.media = {
          title: 'I Love You Mr. Arrogant',
          mediaViewCount: '12345',
          abstract: 'Kan Gua da cakap gua'
      }
      var init = function () {
          //var mediaData = RuntimeProvider.loadArrogantTV();
          //mediaData.then(function (response) {
          //    console.log(response.data);
          //var datum = response.data;
          $http.get(RuntimeValues.URL.TONTON_JSONFEED.MR_ARROGANT).then(function (response) {
              $scope.media = response.data.data;
          });
          $http.get(RuntimeValues.URL.TONTON_JSONFEED.WHAT_IF).then(function (response) {
              $scope.media_2 = response.data.data;
          });
          $http.get(RuntimeValues.URL.TONTON_JSONFEED.KAMPUNG_GIRL).then(function (response) {
              $scope.media_3 = response.data.data;
          });


      }

      init();
  });
