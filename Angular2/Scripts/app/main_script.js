var app = angular.module('myApp', ['ui.router','LocalStorageModule']);

app.config(function($stateProvider){
	$stateProvider
	.state('home',{
		url : '/',
		controller : 'homeController',
		template:	
			`
			<center>
				<h1>Dobrodošli na imenik</h1>
				<button ui-sref='ListAll'>Pregledaj sve učenike</button>
			</center>
			`
		})
	
	.state('ListAll',{
		url: '/listAll',
		controller: 'listAllController',
		template: 
			`
			<h1>All Students</h1>
			<div ng-repeat='student in students'>
				{{student.PrintText}}
				<button ui-sref='Details({Name: student.Name, Surname: student.Surname, Details: student.Details, Age: student.Age, Grade: student.Grade})'>View</button>
				<button ng-click='remove(student.Name, student.Surname)'>Delete {{student.Name}}</button>
			</div>
			<br>
			<br>
			<button ui-sref='AddStudent'>Add Student</button>
			`,
		params: {Name: null, Surname: null}
	})
	
	.state('AddStudent',{
		url: '/addStudent',
		controller: 'addStudentController',
		template: 
			`
			<div ng-controller='addStudentController'>
				<input ng-model='Name' ng-disabled='isAllInputDisabled()'> Name</input>
				<br>
				<input ng-model='Surname' ng-disabled='isAllInputDisabled()'> Last Name</input>
				<br>
				<input ng-model='Grade' ng-disabled='isAllInputDisabled()'> Grade</input>
				<br>
				<input class='radio' type='radio' value='M' ng-model='gender' ng-disabled='isAllInputDisabled()'>M</input>
				<input class='radio' type='radio' value='F' ng-model='gender' ng-disabled='isAllInputDisabled()'>F</input>
				<br>
				<br>
				<button ng-click='submitClicked()' ng-disabled='isButtonDisabled() || isAllInputDisabled()'>Submit</button>
				<button ui-sref='ListAll'>List All Students</button>
			</div>
			`
	})

	.state('Details',{
		url: '/details/:Name',
		controller: 'detailsController',
		template:
			`
				<h1>Student details<h1>
				<div>
					{{Details}}
				<div>
				<button ui-sref='ListAll'>List All Students</button>
			`,
		params: {
			Name: student.Name,
			Surname: student.Surname,
			Age: student.Age,
			Grade: student.Grade,
			Details: null	
		}	
	})
	
});


app.controller('homeController',function($scope){});
app.controller('listAllController', listAllControllerFunction);
app.controller('addStudentController', addStudentControllerFunction);
app.controller('detailsController', detailsControllerFunction);
