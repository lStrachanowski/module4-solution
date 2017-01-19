
(function(){

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
		function RoutesConfig($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/');	

			$stateProvider
				.state('home',{
					url:'/',
					templateUrl:'src/templates/home.template.html'
				});

			$stateProvider
				.state('categories',{
					url:'/categories',
					templateUrl:'src/templates/categories.template.html',
					controller: 'CategoriesController as categoryItems',
					resolve:{
						items:['MenuDataService', function(MenuDataService){
								return MenuDataService.getAllCategories();
						}]
					}
				})
				.state('items',{
					url:'/item-detials/{itemId}',
					templateUrl:'src/templates/items.template.html',
					controller: 'ItemDetailsController as displayItem',
					resolve:{
						item:['$stateParams','MenuDataService', function($stateParams,MenuDataService){
						return MenuDataService.getItemsForCategory($stateParams.itemId);
						}]
					}

				});

		}

})();