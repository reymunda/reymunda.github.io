let loginButton = document.querySelector('.login_button');
let signupButton = document.querySelector('.signup_button');
let toggle = document.querySelector('.toggle');
let background = document.querySelector('.bg')
let signupForm = document.querySelector('.signup_form  form');
let loginForm = document.querySelector('.login_form  form');


//membuat toggle pada login
loginButton.addEventListener('click',() => {
	loginButton.style.backgroundColor = "#35455e"
	background.style.transform = "translateX(680px)"; 
	loginButton.style.color = "white"
	signupButton.style.backgroundColor = "transparent";
	signupButton.style.border = "2px solid #35455e";
	signupButton.style.color = "#35455e"
	signupForm.style.opacity = "0";
	loginForm.style.opacity = "1";

})

//membuat toggle pada signup
signupButton.addEventListener('click',() => {
	signupButton.style.backgroundColor = "#35455e"
	background.style.transform = "translateX(0)"; 
	signupButton.style.color = "white"
	loginButton.style.backgroundColor = "transparent";
	loginButton.style.border = "2px solid #35455e";
	loginButton.style.color = "#35455e"
	signupForm.style.opacity = "1";
	loginForm.style.opacity = "0";
})