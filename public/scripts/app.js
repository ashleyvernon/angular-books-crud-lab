angular
	.module('book', ['ngRoute'])
	.controller('BookIndexController', BookIndexController);

function BookIndexController() {
		var vm = this;
	vm.thing = {};
	vm.func = function(){};
	// more logic here
	}