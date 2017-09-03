function listAllControllerFunction($scope, localStorageService){
	getAllStudents($scope, localStorageService);
	
	$scope.remove = function(name, surname){
		deleteStudent(name, surname, $scope, localStorageService);
		getAllStudents($scope, localStorageService);
	}
}
