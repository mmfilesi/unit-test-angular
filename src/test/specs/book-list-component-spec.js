(function() {
    'use strict';

    describe('component: book-list', function() {
        var component, scope, componentCtrl, bindings;
        var $q, $rootScope, $compile, $httpBackend;

        var books = 
            [
                {
                "author": "Dan Sullivan", 
                "title": "NO SQL for mere mortals", 
                "publisher": "Pearson Education", 
                "year": 2015, 
                "category": "BBDD", 
                "subcategories": ["no SQL"]
                },            
                {
                "author": "Mario Casciaro", 
                "title": "Node.js Design Patterns", 
                "publisher": "Packt Publishing", 
                "year": 2014, 
                "category": "Node", 
                "subcategories": ["design patterns"]
                }
            ];


        beforeEach(angular.mock.module('app'));
        /* use de module with template cache */
        beforeEach(angular.mock.module('appTemplates'));

        /* otra opción es hacerlo al vuelo (avoid)  */

        /*  beforeEach(inject(function($templateCache) {
            $templateCache.put('app/book-list/book-list-template.html',
                '<section>\n' +
                '    <button ng-click="reverse=!reverse">reverse --</button>\n' +
                '\n' +
                '    <book-card ng-repeat="item in $ctrl.books | orderBy:title:reverse" \n' +
                '    title="item.title"\n' +
                '    author="item.author"\n' +
                '    category="item.category"\n' +
                '    ></book-card>\n' +
                '\n' +
                '<section>');
        })); */

        beforeEach(inject(function(_$rootScope_, _$q_, _$compile_, _$httpBackend_, _$componentController_) {
            $httpBackend    = _$httpBackend_;
            $rootScope      = _$rootScope_;
            $compile        = _$compile_;
            $q              =  _$q_;
            scope           = $rootScope.$new();
            component       = angular.element('<book-list></<book-list>');
            component       = $compile(component)(scope);
            bindings        = {};
            componentCtrl   = _$componentController_('bookList', {$scope: scope}, bindings);;

            /* No queremos testar la petición de verdad :: ojo, usar una expr. regular en lugar de la ruta */
            $httpBackend.whenGET('./mocks/books.json').respond(200, {"Accept":"application/json, text/plain, */*"});

            scope.$digest();

        }));

        it('book-list should be defined', function() {
            expect(component).toBeDefined();
        });

        describe('init process', function() {
            beforeEach(function() {
                spyOn(componentCtrl.restData, 'getBooks').and.callFake(function() {
                    var defered = $q.defer();  
                    var promise = defered.promise;
                   
                    defered.resolve(books);
                    return promise;
                });
                componentCtrl.init.initAll();
            });
            it ('should be get book list', function() {
                expect(componentCtrl.restData.getBooks).toHaveBeenCalled();
                expect(componentCtrl.books).toBeDefined();
            });
        });

        describe('actions', function() {

        });

    });
})();