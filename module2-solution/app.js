(function (){
	'use strict';

var app=angular.module('ShoppingListCheckOff',[]);
app.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


app.controller('ToBuyController',function(ShoppingListCheckOffService){

this.items=ShoppingListCheckOffService.GetBuyItems();
this.BuyItem=function(index){
	ShoppingListCheckOffService.boughtItem(index);

}



});

app.controller('AlreadyBoughtController',function(ShoppingListCheckOffService)
{
	this.bought_items=ShoppingListCheckOffService.GetAlreadyBuyItems();

});


function ShoppingListCheckOffService()
{
	var items=[
			{name:"cookies",quantity:"10"},
			{name:"juice",quantity:"5"},
			{name:"Biscuit" , quantity:"10"},
			{name:"Bottle",quantity:"4"},
			{name:"Lays",quantity:"50"}
			];

	var bought_items=[];

	var service = this;

	service.boughtItem=function(index){



		var item={name:items[index].name,quantity:items[index].quantity};
		items.splice(index,1);
		bought_items.push(item);

	};

	service.GetBuyItems=function(){
		return items;
	}

	service.GetAlreadyBuyItems=function(){
		return bought_items;
	}


}


})();


