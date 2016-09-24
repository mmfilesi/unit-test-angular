(function() {
  'use strict';

	angular.module('app').factory('config', Config);

  /* @ngInject */
  function Config() { 

    var module  = {};
    var self    = module;

    var urlBase = '';
    var suffix  = '';

    module.config  = {
      'environment': 'test',
      'lang': 'en_En' 
    };

     module.restOptions = {
      'type': 'application/json',
      'headers': [{
        'key': 'GS-AUTH-TOKEN',
        'value': 'pending'
      }],
      'showPreload': true,
      'errorInterceptor': true
    };

    module.templatePaths = {
        base: ''
    };

    if ( self.config.environment === 'test' ) {
        self.templatePaths.base = './src/';
    } 

    if ( self.config.environment === 'develop' || self.config.environment === 'test' ) {
      urlBase = './mocks/';
      suffix  = '.json';
    }

    module.urls = {};

    module.urls.books = urlBase + 'books' + suffix;

    module.getConfig = function() {
      return self.config;
    };

    module.getRest = function() {
      return self.urls;
    };

    return {
      getConfig: module.getConfig,
      getRest: module.getRest
    }
  }

})();