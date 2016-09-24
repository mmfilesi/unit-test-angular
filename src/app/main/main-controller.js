/**
 * @ngdoc function
 * @name app.controller : mainController
 * @description
 * # controller main view
 */

(function() { 
  'use strict';

  /*@ngInject*/
  function MainController($log, $q, $state, config, bookService) {
    var vm    = this;

    vm.books = [];

    vm.actions = {
        addBook: function() {
            $state.go('addBook');
        }
    };

    vm.init = {       

        initAll: function() {
            $log.info('mainController :: init');
            this.setInitialData();
        },

        setInitialData: function() {
            vm.title = 'programming books';            
        }

    };


    vm.init.initAll();    

  }

  angular.module('app').controller('mainController', MainController);

})();