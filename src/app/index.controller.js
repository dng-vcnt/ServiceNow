(function() {
    'use strict';

    angular
        .module('app')
        .controller('indexController', indexController);

    indexController.$inject = [];

    /* @ngInject */
    function indexController() {
        var vm = this;

        //functions

        //variables
        vm.nav = [];
        vm.navUser = [];

        activate();

        ////////////////

        function activate() {
        	vm.nav = ['Solutions', 'Wins', 'People', 'Demo Center'];
			vm.navUser = ['User', 'Log Out'];
        }
    }
})();