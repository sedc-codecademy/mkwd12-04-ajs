const Employee = {
	init: function (name, position, salary) {
		this.name = name;
		this.position = position;
		this.salary = salary;
	},
	work: function () {
		console.log(`${this.name} is working as a ${this.position}`);
	},
	getSalary: function () {
		console.log(`${this.name} earns ${this.salary}$ per month.`);
	},
};

const kosta = Object.create(Employee);
kosta.init('Kosta', 'Intern JS web developer', 100);

kosta.work();

const Manager = Object.create(Employee);
Manager.init = function (name, position, salary, department) {
	Employee.init.call(this, name, position, salary);
	this.department = department;
	this.subordinates = [];
};

Manager.manage = function () {
	console.log(`${this.name} is managing the ${this.department} department.`);
};

Manager.addSubordinates = function (employee) {
	this.subordinates.push(employee);
	console.log(
		`${employee.name} has been added to the list of subordinates of ${this.name}. Now s/he has ${this.subordinates.length} subordinates.`
	);
};

const elena = Object.create(Manager);
elena.init('Elena', 'Project Manager', 300, 'IT');

console.log(elena);

const Director = Object.create(Manager);
Director.makeDecision = function () {
	console.log(
		`${this.name} is making an important decision about the company.`
	);
};

const zoki = Object.create(Director);
zoki.init('Zoki', 'Managing Director', 10000000, 'Management');

console.log(zoki);

// Bind

let person1 = {
	firstName: 'John',
	lastName: 'Doe',
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

console.log(person1.fullName());

let person2 = {
	firstName: 'Jane',
	lastName: 'Doe',
};

let fullName = person1.fullName.bind(person2);

console.log(fullName());
