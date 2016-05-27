'use strict'
function Human() {
	this.name = 'Petro';
	this.age = 21;
	this.gender = 'mankind';
	this.height = 178;
	this.weight = 72;
}

function Worker() {
	this.job = 'seller';
	this.work = function () {
		this.salary = 3000;
	};
}

Worker.prototype = new Human();
var newWorker = new Worker();
console.log('newWorker', newWorker);
console.log('newWorker.gender', newWorker.gender);

function Student() {
	this.university = 'University of Kharkiv';
	this.scholarship = 1500;
	this.tvShow = function () {
		this.look = 'badly';
	};
}

Student.prototype = new Human();
var newStudent = new Student();
console.log('newStudent', newStudent);
console.log('newStudent.name', newStudent.name);
