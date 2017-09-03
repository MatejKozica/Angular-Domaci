function addStudentControllerFunction($scope, localStorageService){

	$scope.size = localStorageService.get("Students").length;
	getAllStudents($scope, localStorageService);
	
	$scope.submitClicked = function(){
		addStudentsToLocalStorage(localStorageService ,new student($scope.Name, $scope.Surname, $scope.gender, $scope.Grade));
		$scope.size = localStorageService.get("Students").length;
		console.log($scope.isAllInputDisabled());
		getAllStudents($scope, localStorageService);
	}

	$scope.isButtonDisabled = function(){
		if(!$scope.Name || !$scope.Surname || !$scope.gender || !$scope.Grade){
			return true;
		}
		return false;
	}

	$scope.isAllInputDisabled = function(){
		return $scope.size >= 10;
	}
}
