(function() {
    'use strict';

    describe('controller: main', function() {
        var $controller, mainController;
        var  $rootScope, $q, $state;

        beforeEach(angular.mock.module('app'));

        beforeEach(inject(function(_$rootScope_, _$q_, _$state_,  _$controller_) {
            $rootScope      = _$rootScope_;
            $q              =  _$q_;
            $state          =  _$state_;
            $controller     = _$controller_;            
            mainController  = $controller('mainController', {});
        }));

        it('mainController should be defined', function() {
            expect(mainController).toBeDefined();
        });

        describe('init process', function() {

            beforeEach(function() {
                spyOn(mainController.init, 'setInitialData');
                mainController.init.initAll();
            });

            it('init object should be defined', function() {
                expect(mainController.init).toBeDefined();
            });

            it('should initialize with a call to setInitialData()', function() {
                expect(mainController.init.setInitialData).toHaveBeenCalled();
            });

            it('title should be string', function() {
                expect(typeof mainController.title).toEqual('string');
            });

        });

        describe('actions', function() {
            beforeEach(function() {
                spyOn($state, 'go');
                mainController.actions.addBook();
            });
            it('addBook state should be called actions.addBook', function() {
                expect($state.go).toHaveBeenCalledWith('addBook');
            });
        
        });

    });
})();