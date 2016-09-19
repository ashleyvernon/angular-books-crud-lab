console.log('Book Show Controller');

angular
    .module('book')
    .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
//passes http into controller function
function BooksShowController($http, $routeParams, $location) {
    var vm = this;
    var bookId = $routeParams.id;
    // vm.newBook = {};

    // vm.createBook = function() {
    //     $http({
    //         method: 'POST',
    //         url: 'https://super-crud.herokuapp.com/books',
    //         data: {
    //             title: newTitle,
    //             author: newAuthor,
    //             image: newImage,
    //             releaseDate: newReleaseDate
    //         }
    //     }).then(function successCallback(response) {
    //         req.params.body(response);
    //         console.log(req.params.body(response));
    //     }, function errorCallback(response) {
    //         console.log('There was an error posting the data', response);
    //     });
    // }
    $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/books' + bookId
    }).then(function successShowCallback(response) {
        vm.book = response.data;
        console.log(vm.book);
    }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });

    vm.updateBook = function(bookUpdate) {
        $http({
            method: 'PUT',
            url: 'https://super-crud.herokuapp.com/books/' + bookUpdate._id,
            data: {
                title: bookUpdate.title,
                author: bookUpdate.author,
                image: bookUpdate.image,
                releaseDate: bookUpdate.releaseDate
            }
        }).then(function successUpdateCallback(response) {
            console.log('update book response data:', response.data);
            vm.book = response.data;
            $location.path('/');
        });
    };

    vm.deleteBook = function(book) {
        $http({
            method: 'DELETE',
            url: 'https://super-crud.herokuapp.com/books/' + book._id,
        }).then(function successDeleteCallback(response) {
            $location.path('/')
            console.log('book delete response data:', response.data);
            }, function errorCallback(response) {
            console.log('There was an error deleting the data', response);
        });
    }   
}