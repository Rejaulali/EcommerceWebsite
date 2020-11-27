const order = () =>{
	let orderSubmitBtn = document.querySelector('#submitBtn')
	let orderForm = document.querySelector('#orderForm')
	let hiddenInput = document.createElement('input')
	let hiddenBillInput = document.createElement('input')
	hiddenInput.type = "hidden"
	hiddenInput.value = localStorage.getItem('cart')
	hiddenInput.name = "order_description"
	orderForm.appendChild(hiddenInput)
	function isEmpty(obj) {
		console.log(obj)
	    for(var key in obj) {
		        if(obj.hasOwnProperty(key))
		            return false;
		    }
		return true;
	}
	const check_required = ()=>{
				for(var i=0; i < orderForm.elements.length; i++){
				      if(orderForm.elements[i].value === '' && orderForm.elements[i].hasAttribute('required')){
				        alert('There are some required fields!');
				        return false;
				      }
				    }
				return true
			}
	orderSubmitBtn.addEventListener('click',()=>{
		let cart = JSON.parse(localStorage.getItem('cart'))
		let check = isEmpty(cart)
		console.log(check)
		if(check)
		{
			event.preventDefault()
			alert("cart is empty!. you cannot place order.")
		}
		else{
			if(check_required()){
				localStorage.clear('cart')	
			}
			
		}
		
	})
}
order()