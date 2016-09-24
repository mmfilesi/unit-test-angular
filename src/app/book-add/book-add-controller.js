/**
 * @ngdoc function
 * @name app.controller : bookAddControlle
 * @description
 * # controller
 */

(function() { 
  'use strict';

  /*@ngInject*/
  function BookAddController(bookService, $log, $q) {
    var vm    = this;

    var init = {

      initAll: function() {
        $log.info('bookAddController :: init.initAll')
      }

    };

    init.initAll();

  }

  angular.module('app').controller('bookAddController', BookAddController);

})();