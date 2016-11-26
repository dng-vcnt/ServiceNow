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
        vm.removeIndustryDups = removeIndustryDups;
        vm.removeProductDups = removeProductDups;

        //variables
        vm.industries;
        vm.products;
        vm.nav = [];
        vm.navUser = [];
        vm.solutions = [];
        vm.solutionOptions = [];
        vm.selectedSolution;
        vm.solIndustries;
        vm.solProducts;
        vm.winIndustries;
        vm.winProducts;
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
                    vm.solIndustries = removeIndustryDups(data);
                    console.log(vm.solIndustries);
                    vm.solProducts = removeProductDups(data)
                    console.log(vm.solProducts);
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
                    vm.winIndustries = removeIndustryDups(data);
                    console.log(vm.winIndustries);
                    vm.winProducts = removeProductDups(data);
                    console.log(vm.winProducts);
        		},
        		function(error) {
        			console.log(error);
        		}
        	);
        }

        function removeIndustryDups(solution) {
            // Remove duplicates from all industries
            var array = [];
            var temp = "";
            var j = 0;
            for (var i = 0; i < solution.length; i++) {
                if (temp != solution[i].industry) {
                    array[j] = { name: solution[i].industry };
                    temp = solution[i].industry;
                    j++;
                }
            }

            return array;
        }

        function removeProductDups(solution) {
            // Remove duplicates from all products
            var array = solution.filter(function(elem, index, self) {
                return self.indexOf(elem) == index;
            });

            return array;
        }
    }
})();