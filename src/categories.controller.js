(function(){
	'use strict';

	angular.module('data')
	.controller('CategoriesController',CategoriesController);

	CategoriesController.$inject = ['items'];
	function CategoriesController(items){
		var categoryItems = this; 
		categoryItems.items = items.data;
	}
 
})();