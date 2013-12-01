'use strict';

angular.module('discoverMymediaApp')
  .factory('RuntimeFactory', function ($http, RuntimeProvider, RuntimeValues) {
    // Service logic
    // ...    

    // Public API here
    return {

        getLoveYouMrArrogant: function () {
            var returnData = {};
            //return RuntimeProvider.loadArrogantTV();
            $http.get(RuntimeValues.URL.TONTON_JSONFEED.MR_ARROGANT).then(function (response) {
               returnData = response.data.data;
            })

            return returnData;
        },

        getWhatIf: function(){
            return RuntimeProvider.loadWhatIfTV();
        },

        getKampungGirl: function () {
            return RuntimeProvider.loadKampungGirlTV();
        },

        getTV3RSS: function () {
            return RuntimeProvider.loadTV3RSS(); //Expected to Return JSON objects
        },

        getNT7RSS: function () {
            return RuntimeProvider.loadNT7RSS(); //Expected to Return JSON objects
        },

        get8TVRSS: function () {
            return RuntimeProvider.load8TVRSS();
        },

        getTV9RSS: function () {
            return RuntimeProvider.loadTV9RSS();
        },

        getGUARSS: function () {
            return RuntimeProvider.loadGUARSS();
        }
    };
  });
