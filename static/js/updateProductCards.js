import {shoppingCart} from './shoppingCart.js'
export const updateProductCards =()=>{
	let products = document.querySelectorAll('.product')
    products.forEach((product,index) =>{
        product.id = `pr${index}`        
    })
    products.forEach((product,index) =>{
        let productAnchorTag = document.querySelector(`#pr${index} .quick-view-wrapper a`)
        let originalId = productAnchorTag != null ?  productAnchorTag.href.slice(45) : id.slice(2); 
        product.classList.add(`product${originalId}`)
        shoppingCart(product.id)
    })
    localStorage.setItem('load',true)
    console.log("all is set")
   
}