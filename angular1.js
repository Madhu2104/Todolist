var app = angular.module('myApp',[]);
app.controller('todoCtrl', function($scope)
{
	$scope.todolist = [{todoText:'Learn HTML Basics',done:false},
                      {todoText: 'Learn Advanced HTML', done : false},
                      {todoText: 'Learn CSS Basics',done:false},
                      {todoText: 'Learn Advanced CSS', done:false},
                      {todoText: 'Learn Javascript', done:false},
                      {todoText: 'Learn Angular', done :false}
                      ];
$scope.todoAdd = function(){
	$scope.todolist.push({todoText:$scope.todoinput, done:false});
	$scope.todoinput="";
};
$scope.remove = function(){
	var oldlist = $scope.todolist;
	$scope.todolist = [];
	angular.forEach(oldlist, function(x){
		if (!x.done)$scope.todolist.push(x);
	});
};
});