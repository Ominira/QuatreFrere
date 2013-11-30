(function (window, angular, undefined) {
    'use strict';

    /*
        Module: Runtime Service Provider
        DMM: DiscoverMYMedia
        Description: contains provider to make call to backend json feed and other runtime service
    */
    angular.module('DMMGeneralRuntimeService', ['ng'])
        .provider('RuntimeProvider', function (RuntimeValues) {

            var urls = {
                MediaUrl: RuntimeValues.URL.TONTON_JSONFEED,
                RSSUrl: RuntimeValues.URL.RSS_FEED
            };

            var status = {
                OK: 0,
                FAIL: 1
            };

            var initialData;

            this.defaultData = function (data) {
                console.debug('Setting up fake data', data);
                initialData = data;
            };

            var getUrl = function (url) {
                url + RuntimeValues.FORMATS.JSON;
            }
            this.$get = ['$http', '$rootScope', function ($http, $rootScope) {

                return {

                    Status: status,
                    Urls: urls,

                    loadArrogantTV: function () {
                        var target = getUrl(urls.MediaUrl.MR_ARROGANT);
                        return $http.get(target);
                    },

                    loadWhatIfTV: function () {
                        var target = getUrl(urls.MediaUrl.WHAT_IF);
                        return $http.get(target);
                    },

                    loadKampungGirlTV: function () {
                        var target = getUrl(urls.MediaUrl.KAMPUNG_GIRL);
                        return $http.get(target);
                    },

                    loadTV3RSS: function () {
                        $http.get(urls.RSSUrl._TV3).then(function (response) {
                            var jsonData = xmlToJson(response.data);
                            return jsonData;
                        });
                    },

                    loadNT7RSS: function () {
                        $http.get(urls.RSSUrl._NT7).then(function (response) {
                            var jsonData = xmlToJson(response.data);
                            return jsonData;
                        });
                    },

                    load8TVRSS: function () {
                        $http.get(urls.RSSUrl._8TV).then(function (response) {
                            var jsonData = xmlToJson(response.data);
                            return jsonData;
                        });
                    },

                    loadTV9RSS: function () {
                        $http.get(urls.RSSUrl._TV9).then(function (response) {
                            var jsonData = xmlToJson(response.data);
                            return jsonData;
                        });
                    },

                    loadGUARSS: function () {
                        $http.get(urls.RSSUrl._GUA).then(function (response) {
                            var jsonData = xmlToJson(response.data);
                            return jsonData;
                        });
                    }
                }
            }];
        })
        .constant('RuntimeValues', {
            URL: {
                TONTON_JSONFEED: {
                    MR_ARROGANT: 'http://staging.tonton.com.my/webservices/article/get?children=1&compact=0&includeChildTypes=program%2cepisode%2cplaylist%2ccast_profile%2cpackage_content%2cpackage_season%2cpromo%2csubscription&parents=&uniqueId=52012632-6032-46EC-9C68-A23000DEC5C6',
                    WHAT_IF: 'http://staging.tonton.com.my/webservices/article/get?children=1&compact=0&includeChildTypes=program%2Cepisode%2Cplaylist%2Ccast_profile%2Cpackage_content%2Cpackage_season%2Cpromo%2Csubscription&parents=&uniqueId=5C65B465-529A-4861-9C3A-A1D200E42C6B',
                    KAMPUNG_GIRL: 'http://staging.tonton.com.my/webservices/article/get?children=1&compact=0&includeChildTypes=program%2Cepisode%2Cplaylist%2Ccast_profile%2Cpackage_content%2Cpackage_season%2Cpromo%2Csubscription&parents=&uniqueId=3F6D2E80-3E73-4CE5-BF26-A1EF00260025'
                },
                RSS_FEED: {
                    _TV3: 'http://www.tv3.com.my/feed/index.rss',
                    _NT7: 'http://www.ntv7.com.my/feed/index.rss',
                    _8TV: 'http://www.8tv.com.my/feed/index.rss',
                    _TV9: 'http://www.tv9.com.my/feed/index.rss',
                    _GUA: 'http://www.gua.com.my/feed/index.rss'
                }
            },
            FORMATS: {
                JSON: '&format=json&callback=JSON_CALLBACK',
            }
        });
})(window, window.angular);