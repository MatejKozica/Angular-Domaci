function student(name, surname, gender){
	this.Name = name;
	this.Surname = surname;
	this.Gender = gender;
	this.DateCreated = new Date(Math.random()*new Date());
	this.Age = Math.floor(Math.random() * 15) + 24  
	this.PrintText = name+" "+surname+" "+gender;
}

function addStudentToLocalStorage(localStorage, student){
	var students = localStorage.get('Students');
	students.push(student);
	localStorage.set('Students',students);
}

function getAllStudents($scope, localStorage){
	var students = localStorage.get('Students');
	var male = _.filter(students, function(obj){
		return obj.Gender == 'Male';
	}).reverse();
	male = _.sortBy(male,function(obj){ return obj.Age });

	var female = _.filter(students, function(obj){
		return obj.Gender == 'Female';
	});
	female = _.sortBy(female, function(obj){ return obj.Age}).reverse();
	$scope.students = male.concat(female);
	return students;
}
