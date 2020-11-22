const register = ()=>{
	let username = document.querySelector('#id_username')
	let email = document.querySelector('#id_email')
	let password1 = document.querySelector('#id_password1')
	let password2 = document.querySelector('#id_password2')
	username.placeholder = "Enter Your Name"
	email.placeholder = "Enter Your Email"
	email.autocomplete = "off"
	password1.placeholder = "New password"
	password2.placeholder = "Confirm Password"

}
register()