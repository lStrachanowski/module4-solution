(function(){
	'use strict';

	angular.module('data')
	.service('MenuDataService',MenuDataService)
	.constant('ApiUrl','https://davids-restaurant.herokuapp.com/');

	MenuDataService.$inject = ['$http','ApiUrl'];
	function MenuDataService($http,ApiUrl){
		var service = this; 
		service.getAllCategories = function(){
			
			 var response = $http({
			 	method: 'GET',
			 	url: (ApiUrl + 'categories.json')
			 });
			return response;

		};



		service.getItemsForCategory = function(categoryShortName){

			var response = $http({
				method: 'GET',
				url:(ApiUrl + 'menu_items.json'),
				params: {
					category: categoryShortName
				}
			});
				return response;
		};

}
})();