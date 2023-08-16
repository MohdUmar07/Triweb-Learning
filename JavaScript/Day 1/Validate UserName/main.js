var username = prompt("Enter your Name");
var h1Tag = document.querySelector('h1');
	
function setUserName(){
	if (username == null || username.length ==0 ){
		alert("Enter your name");
	}
	else{
	h1Tag.textContent = username;	
	}
}
setUserName(username);