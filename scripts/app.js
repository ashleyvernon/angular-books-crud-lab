console.log('Sanity check JS is working!');

angular
	.module('book', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/books.html',
			controllerAs: 'booksIndexCtrl', 
			controller: 'BooksIndexController'
		})
		//route is going to show us details of individual books
		.when('/:id', {
			templateUrl: 'templates/books-show.html',
			controllerAs: 'booksShowCtrl',
			controller: 'BooksShowController'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}
//tells controller that we'd like to have access to http module
