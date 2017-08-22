function getName(){
	document.getElementById('first').innerHTML = first_function(document.getElementById('name').value);
}

function bark(){
	document.getElementById('second').innerHTML = second_function(document.getElementById('name').value);
}