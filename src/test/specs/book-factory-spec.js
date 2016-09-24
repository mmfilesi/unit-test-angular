(function() {
  'use strict';


  describe('factory: bookService', function() {
    var $q, $httpBackend;
    var bookService;
    var books = {
        "data": [
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
        ]
    };
    var endPoints = {};
    var bookUri = './mocks/books.json';

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function( _$q_, _$httpBackend_, _bookService_) {
        $q              = _$q_;
        $httpBackend    = _$httpBackend_;
        bookService     = _bookService_;       
    }));

    it('bookService should be defined', function() {
      expect(bookService).toBeDefined();
    });

    describe('bookService rest', function() {
         var result;

        beforeEach(function() {
            // Initialize our local result object to an empty object before each test
            result = {};

            // Spy on our service call but allow it to continue to its implementation
            // spyOn(bookService, 'getBooks').and.callThrough();
        });

        it('should have getBooks method', function() {
            expect(bookService.getBooks()).toBeDefined();
        });
        // https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-2
       /*  it('getBooks should return books list', function() {
            // Declare the endpoint we expect our service to hit and provide it with our mocked return values
           $httpBackend.whenGET(bookUri).respond(200, $q.when(books));
            $httpBackend.whenGET(/(.*)template.html/).passThrough();
            bookService.getBooks().then(function(_result_) {
                result = result;
            }); 

            // Flush pending HTTP requests
            $httpBackend.flush();

            expect(bookService.getBooks).toHaveBeenCalled();
            expect(result.data[0].year).toEqual(2015);
        }); */
    });

  });

})();