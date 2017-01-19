(function(){
	'use strict';

	angular.module('data')
	.component('item',{
		templateUrl:'src/templates/item.template.html',
		bindings:{
			items:'<'
		}
	});


})();