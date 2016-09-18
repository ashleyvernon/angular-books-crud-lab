console.log('Sanity check JS is working!');

angular
	.module('book', ['ngRoute'])
	.controller('BooksIndexController', BooksIndexController);

//tells controller that we'd like to have access to http module
BooksIndexController.$inject = ['$http'];
//passes http into controller function
function BooksIndexController($http) {
	var vm = this;
	// vm.newBook = {};
	$http({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books'
	}).then(function successCallback(response) {
		vm.books = response.data.books;
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

	vm.updateBook = function(book) {
		$http({
			method: 'PUT',
			url: 'https://super-crud.herokuapp.com/books' + book._id,
		}).then(function successUpdateCallback(response) {
			
		})
	}

	vm.deleteBook = function(book) {
		$http({
			method: 'DELETE',
			url: 'https://super-crud.herokuapp.com/books' + book._id,
		}).then(function successDeleteCallback(json) {
			var index = vm.books.indexOf(book);
			vm.books.splice(index, 1);
			console.log('book delete response data:', response.data);
			}, function errorCallback(response) {
			console.log('There was an error deleting the data', response);
		});
	}	
	// vm.newBook = {
	// 	title: '',
	// 	author: '',
	// 	image: '',
	// 	releaseDate: ''
	// };
}