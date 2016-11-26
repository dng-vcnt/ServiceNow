(function() {
    'use strict';

    angular
        .module('app')
        .factory('indexFactory', indexFactory);

    indexFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function indexFactory($http, $q) {
        var service = {
            func: func,
            getSolutions: getSolutions,
            getWins: getWins

        };
        return service;

        ////////////////

        function func() {
        }

        function getSolutions() {
            // Retrieve data from solution json file
        	var defer = $q.defer();
            $http.get('solutions.json').then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error.status, error.statusText);
                }
            );
            return defer.promise;
        }

        function getWins() {
            // Retrieve data from solution win json file
        	var defer = $q.defer();
            $http.get('solutionwin.json').then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error.status, error.statusText);
                }
            );
            return defer.promise;
        }
    }
})();