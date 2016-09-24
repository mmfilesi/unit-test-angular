(function() {
    'use strict';

    // webs interesantes:
    // https://github.com/vojtajina/ng-directive-testing
    // https://www.sitepoint.com/angular-testing-tips-testing-directives/
    // http://angulartestingquickstart.com/ <-------------
    // http://untangled.io/how-to-unit-test-a-directive-with-templateurl/ <---
    describe('directive: header', function() {
        var scope, $compile, $state, directiveElement, scopeElement,  $httpBackend;

        beforeEach(angular.mock.module('app'));

        // load the templates
       // beforeEach(module('src/app/header/main-header-template.html'));
       beforeEach(angular.mock.module('appTemplates'));

        beforeEach(inject(function(_$rootScope_, _$compile_, _$state_,  _$httpBackend_) {
            $state              = _$state_;
            $httpBackend        =  _$httpBackend_;
            scope               = _$rootScope_.$new();
            $compile            =  _$compile_;
            directiveElement    = $compile('<main-header title="foo"></main-header>')(scope);

            scope.$digest();
            scopeElement        = directiveElement.isolateScope();

        }));

        it('should exists', function() {
           expect(directiveElement).toBeDefined();
        });
        it('should have <header> tag', function() {
            var header = directiveElement.find('header');
            expect(header.length).toBe(1);
        });
        it('should have title if is defined', function() {
            var header = directiveElement.find('header');
            expect(typeof scopeElement.title).toBe('string');
        });

        it('should go to main view when click', function() {
            var header = directiveElement.find('header');

            $httpBackend.whenGET('app/main/main-template.html').respond(200, {"Accept":"application/json, text/plain, */*"});

            spyOn($state, 'go');
            header.triggerHandler('click');
            expect($state.go).toHaveBeenCalledWith('main');
        });
        
    });
})();