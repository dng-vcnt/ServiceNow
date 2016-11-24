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
				{key: 'solution', value: 1}, 
				{key: 'solution win', value: 2}
			];
			vm.selectedSolution = vm.solutionOptions[0];
        }

        function getSolutions(){
        	IndexFactory.getSolutions().then (
        		function(data) {
        			console.log("success");
        			vm.solutions = data;
        		},
        		function(error) {
        			console.log(error);
        		}
        	);
        }

        function getWins(){
        	IndexFactory.getWins().then (
        		function(data) {
        			console.log("success");
        			vm.wins = data;
        		},
        		function(error) {
        			console.log(error);
        		}
        	);
        }
    }
})();