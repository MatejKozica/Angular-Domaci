var app = angular.module('myApp',['LocalStorageModule']);

app.run(function(localStorageService){
	if(!localStorageService.get('Students')){
		localStorageService.set('Students', []);
	}
});


app.controller('StudentCreateController', function($scope, localStorageService){
	$scope.size = localStorageService.get("Students").length;
	getAllStudents($scope, localStorageService);
	$scope.submit_clicked = function(){
		addStudentToLocalStorage(localStorageService ,new student($scope.Name, $scope.Surname, $scope.gender));
		$scope.size = localStorageService.get("Students").length;
		console.log($scope.isAllIinputDisabled());
		getAllStudents($scope, localStorageService);
	}

	$scope.isButtonDisabled= function(){
		if(!$scope.Name || !$scope.Surname || !$scope.gender){
			return true;
		}
		return false;
	}

	$scope.isAllIinputDisabled = function(){
		return $scope.size >= 10;
	}

	$scope.filter = function(){
		var students = getAllStudents($scope, localStorageService);
		if($scope.hideMale === true){
			students = _.filter(students, function(obj){ return obj.Gender != 'Male'});	
		}
		if($scope.hideFemale === true){
			students = _.filter(students, function(obj){ return obj.Gender != 'Female'});	
		}
		if($scope.hideMale === false && $scope.hideFemale === false){
			getAllStudents($scope, localStorageService);
			return true;
		}
		$scope.students = students;
	}
});
