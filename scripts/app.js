console.log('Sanity check JS is working!');

angular
	.module('book', ['ngRoute'])
	.controller('BooksIndexController', BooksIndexController);

//tells controller that we'd like to have access to http module
BooksIndexController.$inject = ['$http'];
//passes http into controller function
function BooksIndexController($http) {
	var vm = this;
	vm.newBook = {};
	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books'
	}).then(function successCallback(response) {
		vm.books = response.data;
	}, function errorCallback(reponse) {
		console.log('There was an error getting the data', response);
	});

	vm.createBook = function() {
		$http({
			method: 'POST',
			url: 'https://super-crud.herokuapp.com/books',
			data: {
				title: newTitle,
				author: newAuthor,
				image: newImage,
				releaseDate: newReleaseDate
			}
		}).then(function successCallback(response) {
			req.params.body(response);
			console.log(req.params.body(response));
		}, function errorCallback(response) {
			console.log('There was an error posting the data', response);
		});
	}
	// vm.newBook = {
	// 	title: '',
	// 	author: '',
	// 	image: '',
	// 	releaseDate: ''
	// };
}