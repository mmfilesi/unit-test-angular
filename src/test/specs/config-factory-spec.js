(function() {
  'use strict';


  describe('factory: config', function() {
    var config;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function(_config_) {
        config = _config_;       
    }));

    it('config should be defined', function() {
      expect(config).toBeDefined();
    });

    describe('config data', function() {
        it('config should have environment data', function() {
            expect(typeof config.getConfig().environment).toBe('string');
        });
        it('config should have lang data', function() {
            expect(typeof config.getConfig().lang).toBe('string');
        });
    });

    describe('config rest', function() {
        it('config should have rest data', function() {
            expect(typeof config.getRest().urls).toBeDefined();
        });
    });

  });

})();