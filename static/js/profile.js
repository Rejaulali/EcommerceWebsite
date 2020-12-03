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


const updateOnlyImage = ()=>{
	let formContainer = document.querySelector('.update-form2')
	let formContainer2 = document.querySelector('.update-form')
	let updateForm = document.querySelector('#updateForm2')
	let fullUpdateForm = document.querySelector('#updateForm')
	let camraButton = document.querySelector('.circular-image2') ? document.querySelector('.circular-image2'):document.querySelector('.switch-to-edit')
	let cancelButton = document.querySelectorAll('.cancelButton2')
	let submitBtn = document.querySelector('.update-form2 #submitImage')
	let imageField1 = document.querySelector('#imageField')
	let imageField2 =document.querySelector('#id_profile_pic')

	const switchToFullUpdate = ()=>{
		formContainer2.style.zIndex = "3"
		formContainer2.style.opacity="1"
		fullUpdateForm.style.top="inherit"
	}
	const onlyImageUpdate = () =>{
		formContainer.style.zIndex = "3"
		formContainer.style.opacity="1"
		updateForm.style.top="inherit"
	}

	imageField1.files = imageField2.files
	submitBtn.addEventListener('click', ()=>{
		event.preventDefault()
		imageField2.files = imageField1.files
		fullUpdateForm.submit()

	})
	camraButton.addEventListener('click',()=>{
		console.log(camraButton.classList[1])
		if(camraButton.classList[1] == 'circular-image2'){
			onlyImageUpdate()
		}else{
			switchToFullUpdate()
		}
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
updateOnlyImage()