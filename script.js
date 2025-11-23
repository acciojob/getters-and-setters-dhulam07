//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get Name(){
		console.log(person.name);
	}
	set Age(age){
		this.age=age;
		console.log(person.age); 
	}
	const person = new Person("John", 25);

}

class Student extends Person {
	 study(){
		console.log(`${this.name} is studying`)
	}
	const student = new Student("Alice", 22);
	student.study(); 
}

class Teacher extends Person {
	 teach(){
		console.log(`${this.name} is teaching`)
	}
	const teacher = new Teacher("Bob", 40);
	teacher.teach(); 
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
