// this.gender === 'M' ? 'Mr.' : this.gender === 'F' ? 'Ms.' : ''
// if (this.gender === 'M') {
// 	return 'Mr.';
// } else if (this.gender === 'F') {
// 	return 'Ms.';
// } else {
// 	return '';
// }
// M = Mr.
// F = Ms.
// X = ' '

function Person(firstName, lastName, age, gender) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age || 0;
	this.gender = gender;
	this.fullName = `${
		this.gender === 'M' ? 'Mr. ' : this.gender === 'F' ? 'Ms. ' : ''
	}${this.firstName} ${this.lastName}`;
}

function Trainer(academyName, id, firstName, lastName, age, gender) {
	Object.setPrototypeOf(this, new Person(firstName, lastName, age, gender));
	this.academyName = academyName;
	this.id = id;
	this.startClass = function () {
		console.log(`${this.fullName} has started the class...`);
	};
}

let somePerson = new Person('John', 'Doe', 20, 'M');
let somePerson2 = new Person('Jane', 'Doe', 22, 'F');
let somePerson3 = new Person('Johnny', 'Doe', 18, 'W');

console.log(somePerson);
console.log(somePerson2);
console.log(somePerson3);

let todor = new Trainer('Qinshift Academy', 1, 'Todor', 'Pelivanov', 34, 'M');

console.log(todor);

function Student(academyName, id, firstName, lastName, age, gender) {
	Object.setPrototypeOf(this, new Person(firstName, lastName, age, gender));
	this.academyName = academyName;
	this.id = id;
	this.writeHomework = function () {
		console.log(`${this.fullName} wrote homework for last class.`);
	};
}

const dejan = new Student(
	'Qinshift Academy',
	2,
	'Dejan',
	'Dejanovski',
	20,
	'M'
);

function CodeStudent(id, firstName, lastName, age, gender) {
	Object.setPrototypeOf(
		this,
		new Student('Qinshift Academy', id, firstName, lastName, age, gender)
	);
	this.hasIndividualProject = false;
	this.hasGroupProject = false;
	this.doProject = function (type) {
		if (type === 'individual') {
			this.hasIndividualProject = true;
		}
		if (type === 'group') {
			this.hasGroupProject = true;
		}
	};
}

const ivan = new CodeStudent(1, 'Ivan', 'Ivanovski', 30, 'M');

function DesignStudent(id, firstName, lastName, age, gender) {
	Object.setPrototypeOf(
		this,
		new Student('Qinshift Academy', id, firstName, lastName, age, gender)
	);
	this.isStudentOfTheMonth = false;
	this.attendAdobeExam = function () {
		console.log(`${this.fullName} is attending the Adobe Exam`);
	};
	this.setStudentOfTheMonth = function () {
		this.isStudentOfTheMonth = true;
	};
}

const aneta = new DesignStudent(1, 'Aneta', 'Stankovska', 20, 'F');

function NetworkStudent(id, firstName, lastName, age, gender) {
	Object.setPrototypeOf(
		this,
		new Student('Qinshift Academy', id, firstName, lastName, age, gender)
	);
	this.attendCiscoExam = function () {
		console.log(`${this.fullName} is attending the Cisco exam...`);
	};
}

const igor = new NetworkStudent(2, 'Igor', 'Micevski', 25, 'M');

Person.prototype.checkForAcademy = function () {
	if (this.academyName) {
		console.log(`Is attending academy: ${this.academyName}`);
	} else {
		console.log('This person is not attending an academy at the moment');
	}
};

igor.checkForAcademy();

somePerson.checkForAcademy();
