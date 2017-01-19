(function(){

angular.module('data')
.controller('ItemDetailsController',ItemDetailsController);

ItemDetailsController.$inject = ['item'];
function ItemDetailsController(item){
	var displayItem = this; 
	displayItem.items = item.data.menu_items;
}

})();