var app=angular.module('LunchChecker',[]);
app.controller('LunchCheckController',function($scope){

	$scope.CheckList = function(){
		$scope.message="Please Enter Data First!"
		var splits = $scope.list.split(',');
		if (splits.length <= 3){
			$scope.message="Enjoy!";
		}
		else
			$scope.message="Too Much!";


	}
});
