console.log('Book Show Controller');

angular
    .module('book')
    .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];
//passes http into controller function
function BooksShowController($http, $routeParams) {
    var vm = this;
    vm.newBook = {};

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
            console.log('update book response data:', response.data);
        });
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
}