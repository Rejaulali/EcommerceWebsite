const order_admin = () =>{
	let hiddenInput = document.querySelector('#orderDescription')
	let cart = JSON.parse(hiddenInput.value)
	let checkoutWrapper = document.querySelector('.checkout-wrapper')
	function isEmpty(obj) {
    for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	            return false;
	    }
	    return true;
	}
	
	if(!isEmpty(cart)){
		let checkoutList = document.querySelector('.cart-details')
		checkoutList.innerHTML =""
		checkoutList.innerHTML = `
			<div class="cart-row" style="padding-bottom: 0.5em">
					<div><span>Item</span></div>
					<div><span>price</span></div>
					<div><span>Number</span></div>
					<div><span>Total</span></div>
				</div>
		`
		let finalTotal = 0;
		for(let item in cart){
			let cartRow = document.createElement('div');
			let total = cart[item].price * cart[item].no
			console.log(cart[item].price)
			cartRow.className = "cart-row"
			cartRow.innerHTML = `
				<div><span class="product-name-span">${cart[item].name}</span></div>
				<div><span>$${cart[item].price}</span></div>
				<div><span>${cart[item].no}</span></div>
				<div><span>$${total}</span></div>
			`
			checkoutList.appendChild(cartRow)
			finalTotal = finalTotal + total
		}
		
		let endRow = document.createElement('div')
		endRow.className = "cart-row"
		endRow.innerHTML = `
			<div></div>
			<div style="font-weight: bold;color:grey;width:40%">Grand Total:</div>
			<div style="color:green;font-weight:bold">$${finalTotal}</div>
		`
		checkoutList.appendChild(endRow)
	}
	else{
		checkoutWrapper.innerHTML =`
			<div style="height:200px;display:grid;align-items:center;color:grey" class="main">
				<h2>
					Nothing is in your Cart
				</h2>
			</div>
		`
	}

}

order_admin()
//checkout();