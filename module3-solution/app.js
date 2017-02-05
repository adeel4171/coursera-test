(function (){
	'use strict';

var app=angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundd',foundItemsDirective);

function foundItemsDirective(){

	var ddo={
		templateUrl: 'shoppingList.html',
		scope: {
			items: '<',
			badRemove:'&'

	},
	controller: ShoppingListDirectiveController,
	controllerAs: 'list',
	bindToController:true

};

return ddo;
}

function ShoppingListDirectiveController(){
	var list=this;
};




NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){

var menu=this;
menu.found=[];
menu.input1="";

menu.getData = function(value)
{

	menu.message="";

	if (value.length<1)
	{
		menu.message="Nothing found";
		return;
	}

var promise= MenuSearchService.getMatchedMenuItems(value);
promise.then(function(response){

	if(response.length<1){
		menu.message="Nothing found";
	};

menu.found=response;
})

.catch(function(error){
	console.log("Something Wrong");
});

};


menu.removeItem = function(index)
{
	menu.found.splice(index,1);
}

}


MenuSearchService.$inject=['$http'];

function MenuSearchService($http){

	var service=this;

	service.getMatchedMenuItems=function(searchTerm){

		var foundItems=[];

		return $http({
			method:"GET",
			url:("https://davids-restaurant.herokuapp.com/menu_items.json")
		}).then(function(result){
			

			//console.log(result.data.menu_items.length);

			if (result.data.menu_items.length>0){
				console.log('LEVEL');
				for(var i=0;i<result.data.menu_items.length;i++){
					if (result.data.menu_items[i].description.includes(searchTerm))
					{
						//console.log('HURRAH!!!');
						foundItems.push(result.data.menu_items[i]);
					};
				};

			};
			
			/*for(i=0;i<result.data.menu_items.length;i++)
			{
				console.log("hello");
			}*/

			return foundItems;

		});


	}


	}; 
















})();
