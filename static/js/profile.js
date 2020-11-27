const profile = ()=>{
	let formContainer = document.querySelector('.update-form')
	let updateForm = document.querySelector('#updateForm')
	let editButton = document.querySelector('#editButton')
	let cancelButton = document.querySelectorAll('.cancelButton')
	editButton.addEventListener('click',()=>{
		formContainer.style.zIndex = "3"
		formContainer.style.opacity="1"
		updateForm.style.top="inherit"
	})
	cancelButton.forEach((item)=>{
		item.addEventListener('click',()=>{
			event.preventDefault()
			formContainer.style.zIndex = "-3"
			formContainer.style.opacity="0"
			updateForm.style.top="-100%"		
		})
	})
}
profile()