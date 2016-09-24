/* bookList*/

var bookCardSettings = {
    bindings: {},
    templateUrl: 'app/book-list/book-list-template.html',
    controller: function($log, $q, bookService) {
        var self = this;

        self.books = [];

        this.init = {
            initAll: function() {
                self.restData.getBooks().then(function(data) {
                    self.books = data.data;
                });
            }
        };

        this.restData = {

            getBooks: function() {
                var defered = $q.defer();  
                var promise = defered.promise;

                bookService.getBooks().then(function(data) {
                    defered.resolve(data);
                }, function(err) {
                    $log.error('error getBooks', err);
                    defered.reject(err);
                });

                return promise;
            }
        };

        this.$onInit = function() {
            this.init.initAll();
        };

    }
};

angular.module('app').component('bookList', bookCardSettings);