'use strict';

angular.module('discoverMymediaApp')
  .controller('FeaturedCtrl', function ($scope, $http, RuntimeValues) {
      $scope.activeSubNav = 0;
      $scope.changeSubNav = function (i) {
          $scope.activeSubNav = i;
      };

      $scope.activeNav = 4;
      $scope.changeNav = function (i) {
          $scope.activeNav = i;
      };

      var init = function () {
          $http.get(RuntimeValues.URL.TONTON_JSONFEED.MR_ARROGANT).then(function (response) {
              $scope.media = response.data.data;
          });
          $http.get(RuntimeValues.URL.TONTON_JSONFEED.WHAT_IF).then(function (response) {
              $scope.media_2 = response.data.data;
          });
          $http.get(RuntimeValues.URL.TONTON_JSONFEED.KAMPUNG_GIRL).then(function (response) {
              $scope.media_3 = response.data.data;
          });
      };

      $scope.GuaRSS = {
          title: 'Gua',
          links: 'http://www.gua.com.my/',
          image: {
              url: 'http://www.gua.com.my/themes/theme_20110812113824/images/gualogo.png'
          },
          item: [
              {
                  title: 'Lana Nordin Mahu Berubah Bukan Kerana Johan',
                  links: 'http://www.gua.com.my/berita-artis/Lana_Nordin_Mahu_Berubah_Bukan_Kerana_Johan.html',
                  category: 'BERITA ARTIS',
                  description: 'Menurut Lana, andai satu hari nanti terbuka pintu hatinya untuk berhijab, dia melakukannya kerana Allah dan bukan untuk memikat hati sesiapa.',
                  pubDate: 'Sun, 01 Dec 2013 00:45:00 +0800'
              },
              {
                  title: 'ASK 2013 Lebih Baik Dari Tahun Lalu',
                  links: 'http://www.gua.com.my/berita-artis/ASK_2013_Lebih_Baik_Dari_Tahun_Lalu.html',
                  category: 'BERITA ARTIS',
                  description: 'Secara keseluruhan, penganjuran ASK 2013 dilihat lebih baik daripada edisi sebelum ini dengan majlis yang ringkas dan menghiburkan.',
                  pubDate: 'Sat, 30 Nov 2013 10:26:00 +0800'
              },
              {
                  title: 'KIL Filem Terbaik Anugerah Skrin 2013',
                  links: 'http://www.gua.com.my/berita-artis/KIL_Filem_Terbaik_Anugerah_Skrin_2013.html',
                  category: 'BERITA ARTIS',
                  description: 'Debaran Anugerah Skrin 2013 (ASK 2013) telah pun berakhir. Seperti yang telah dijangkakan, acara yang berlangsung di Stadium Malawati, Shah Alam ini menyaksikan filem KIL dinobatkan sebagai Filem Terbaik.',
                  pubDate: 'Fri, 29 Nov 2013 23:50:00 +0800'
              },
              {
                  title: 'Johan As’ari & Lana Nordin Gagal Dihubungi',
                  links: 'http://www.gua.com.my/berita-artis/Johan_As_ari_Lana_Nordin_Gagal_Dihubungi.html',
                  category: 'BERITA ARTIS',
                  description: 'Ekoran pendedahan mereka kini sedang bercinta dan merancang untuk berkahwin, Johan As’ari dan Lana Nordin kini boleh dikatakan menjadi buruan pihak media kerana ramai yang ingin mendapatkan penjelasan lanjut.',
                  pubDate: 'Fri, 29 Nov 2013 12:59:00 +0800'
              }
          ]
      };

      init();
  });
