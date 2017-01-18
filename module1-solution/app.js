var app=angular.module('LunchChecker',[]);
app.controller('LunchCheckController',function($scope){

	$scope.CheckList = function(){
		$scope.message="Please Enter Data First!"
		$scope.color1="red"
		var splits = $scope.list.split(',');
		if (splits.length <= 3){
			$scope.message="Enjoy!";
			$scope.color1="green"
		}
		else
		{
			$scope.message="Too Much!";
			$scope.color1="green"
		}




	}
});
