class Animal{
	constructor(name){
		this.name = name;
	}
	
	getName(){
		return this.name;
	}
}

class Dog extends Animal{
	constructor(name){
		super(name);
	}
	
	bark(){
		return "Dog " + this.name + " is barking!";
	}
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


