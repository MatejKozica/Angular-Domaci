function student(name, surname, gender, grade){
	this.Name = name;
	this.Surname = surname;
	this.Gender = gender;
	this.Grade = grade;
	this.DateCreated = new Date(Math.random()*new Date());
	this.Age = Math.floor(Math.random() * 15) + 24  
	this.PrintText = name+" "+surname;
	this.Details = this.PrintText+", Razred: "+grade+", Dob: "+this.Age+", Spol: "+gender;
}

function addStudentsToLocalStorage(localStorage, student){
	var students = localStorage.get('Students');
	students.push(student);
	localStorage.set('Students',students);
}

function getAllStudents($scope, localStorage){
	var students = localStorage.get('Students');
	var male = _.filter(students, function(obj){
		return obj.Gender == 'M';
	}).reverse();
	male = _.sortBy(male,function(obj){ return obj.Age });

	var female = _.filter(students, function(obj){
		return obj.Gender == 'F';
	});
	female = _.sortBy(female, function(obj){ return obj.Age}).reverse();
	$scope.students = male.concat(female);
	return students;
}

function deleteStudent(name, surname, $scope, localStorage){
	var students = localStorage.get('Students');
	students = _.remove(students, function(obj){
		if(obj.Name === name && obj.Surname === surname){
			return false;
		};
		return true;
	})
	console.log(students);
	localStorage.set('Students',students);
}
