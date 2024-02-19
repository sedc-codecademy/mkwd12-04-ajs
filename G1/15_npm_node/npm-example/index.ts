interface Person {
	firstName: string;
	lastName: string;
}

enum Track {
	JS = 'JS',
	NET = 'NET',
}

class Student implements Person {
	firstName: string;
	lastName: string;
	track: Track;

	constructor(firstName: string, lastName: string, track: Track) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.track = track;
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

const ivo = new Student('Ivo', 'Kostovski', Track.JS);
console.log(ivo);
console.log(ivo.getFullName());
