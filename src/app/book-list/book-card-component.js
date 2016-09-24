/* bookCard */

var bookCardSettings = {
    bindings: {
        title: '<',
        author: '<',
        category: '<'
    },
    templateUrl: 'app/book-list/book-card-template.html',
    controller: function() {
        var self = this;

        this.title      = this.title || '-';
        this.author     = this.author || '-';
        this.category   = this.category || '-';
    }
};

angular.module('app').component('bookCard', bookCardSettings);