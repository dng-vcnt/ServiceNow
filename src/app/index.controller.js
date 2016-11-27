(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['indexFactory'];

    /* @ngInject */
    function IndexController(indexFactory) {
        var vm = this;

        //functions
        vm.getSolutions = getSolutions;
        vm.getWins = getWins;

        //variables
        vm.industries;
        vm.products;
        vm.nav = [];
        vm.navUser = [];
        vm.solutions = [];
        vm.solutionOptions = [];
        vm.selectedSolution;
        vm.wins = [];

        activate();

        ////////////////

        function activate() {
        	vm.nav = ['Solutions', 'Wins', 'People', 'Demo Center'];
			vm.navUser = ['Cory Micek', 'Log Out'];
			vm.solutionOptions = [
				{key: 'solution'}, 
				{key: 'solution win'}
			];
			vm.selectedSolution = vm.solutionOptions[0];

            getSolutions();
            getWins();
        }

        function getSolutions() {
            // Send request to get data from solution json file
        	indexFactory.getSolutions().then (
        		function(data) {
        			console.log("success: solution json");
        			vm.solutions = data;
                    console.log(vm.solutions);
        		},
        		function(error) {
        			console.log(error);
        		}
        	);
        }

        function getWins() {
            // Send request to get data from solutions win json file
        	indexFactory.getWins().then (
        		function(data) {
        			console.log("success: solution win json");
        			vm.wins = data;
                    console.log(vm.wins);
        		},
        		function(error) {
        			console.log(error);
        		}
        	);
        }
    }
})();