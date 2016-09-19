console.log('Books Index Controller');

angular
	.module('book')
	.controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject =['$http'];

function BooksIndexController($http){
    var vm = this;

    $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/books'
    }).then(function successCallback(response) {
        vm.books = response.data.books;
        console.log(vm.books);
    }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });
};