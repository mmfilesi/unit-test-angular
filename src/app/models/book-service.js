(function() {
  'use strict';

	angular.module('app').factory('bookService', BookService);

  /* @ngInject */ 
  function BookService($http, $q, config) {
    var urlBooks = config.getRest().books;
    var books = {};
    
    books.allBooks = 'pending';

    books.getBooks = function() {
        var defered = $q.defer();  
        var promise = defered.promise; 

        if ( books.allBooks === 'pending' ) {
            $http({
                method: 'GET',
                url: urlBooks
                }).then(function successCallback(response) {
                    books.allBooks = response.data;
                    defered.resolve(response.data);                    
                }, function errorCallback(response) {
                    // todo interceptor
                    // defered.reject(err)
                });
        } else {
            defered.resolve(books.allBooks);
        }
        return promise;
    };

    return books;
  }

})();