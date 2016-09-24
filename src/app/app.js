(function() {
    'use strict';

	angular.module('app', ['ui.router']);

	/*@ngInject*/
	angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		var main = {
			name: 'main',
			url: '/',
			templateUrl: 'app/main/main-template.html',
			controller: 'mainController',
			controllerAs: 'main'
		};

		var addBook = {
			name: 'addBook',
            url: '/addBook',
			templateUrl: 'app/book-add/book-add-template.html',
			controller: 'bookAddController',
			controllerAs: 'addBook'
		};

        // use the HTML5 History API
        $locationProvider.html5Mode(true);

		$stateProvider.state(main); 
		$stateProvider.state(addBook);

		$urlRouterProvider.otherwise('/');

	});

})();