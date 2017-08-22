function Animal(name){
	this.name = name;
}

Animal.prototype.getName = function(){
	return this.name;
}

function Dog(name){
	Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
	return "Dog " + this.name + " is barking!";
}

function first_function(name){
	var dog = new Dog(name);
	var s = "dog.getName() === " + "\'" + dog.getName() + "\'";
	return s;
}

function second_function(name){
	var dog = new Dog(name);
	var s = "dog.bark() === " + "\'" + dog.bark() + "\'";
	return s;
}