function loginBtn () {
	var resultLogin = prompt('Who is there?');

	if  (resultLogin == 'Admin') { 
		return password();

	}

	else if (resultLogin === null) {
		alert ('Cancer login');
		document.body.style.background = 'yellow';
	}

	else {
		alert ('I dont know you, mofo!');
		 document.body.style.background = 'red';
	}
}

function password () {
	var resultPwd = prompt('Password?');

	if (resultPwd == 'blackmaster') {
		alert ('Wellcome!'); 
		document.body.style.background = 'green';
	}

	else if (resultPwd === null) {
		alert ('Cancer login');
		document.body.style.background = 'yellow';
	}
	
	else  {
		alert ('Wrong password');
		document.body.style.background = 'red';
	}
}