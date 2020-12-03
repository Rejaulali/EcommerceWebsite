import cartIcon from "./cartIcon.js"
import {updateProductCards} from "./updateProductCards.js"
import getCartItems from "./main.js"
export const shoppingCart =(id, cartIconCalled = false)=>{
    let cart = getCartItems()
    console.log(id)
    let addToCart = document.querySelector(`#${id} .add-to-cart`)
    let addToCartContainer = document.querySelector(`#${id} .add-to-cart-container`)
    let productAnchorTag = document.querySelector(`#${id} .quick-view-wrapper a`)
    let originalId = !cartIconCalled ? productAnchorTag.href.slice(45): id.slice(2)
    if(cart[originalId] != undefined){
        
        addToCartContainer.innerHTML = `<button class="btn minus" id="minus${id}"> - </button>
            <span class="no-of-item">${cart[originalId].no}</span>    
            <button class="btn plus" id="plus${id}"> + </button>
        `
    }
    if(addToCart != null){
        addToCart.addEventListener('click',updateAddToCartBtn)
    }else if(addToCartContainer != null){
        addToCartContainer.innerHTML = `<button class="btn add-to-cart">Add To Cart</button>`
        document.querySelector(`#${id} .add-to-cart`).addEventListener('click',updateAddToCartBtn)
        cartIcon()
        /* this is called by carticon we remove an element from cart*/
    }
    if(cartIconCalled){
      cartIcon()
      console.log("carticon is called")
      updateCart()
      updateProductCards()
    }


    function updateAddToCartBtn(){
        let relatedProductsContainer = document.querySelectorAll(`.product${originalId} .add-to-cart-container`)

        relatedProductsContainer.forEach((item) => {
            item.innerHTML = `<button class="btn minus" id="minus${id}"> - </button>
                <span class="no-of-item">1</span>    
                <button class="btn plus" id="plus${id}"> + </button>
           `
        })
        console.log(id) 
        let itemName = document.querySelector(`.product${originalId} h4`).innerHTML
        let price = document.querySelector(`.product${originalId} .discount-rate`).innerHTML
        price=parseInt(price.replace(/\s+/g,'').trim().slice(1))
        cart = getCartItems()
        cart[originalId] = {no:1,name:itemName,price};
        updateLocalStorage();
        updateCart();
        
    }
    if(!cartIconCalled && !JSON.parse(localStorage.getItem('load'))){
        document.addEventListener('click',(e) =>{
         if(e.target && e.target.id == `plus${id}`){
             let noOfItem = parseInt(document.querySelector(`#${id} .no-of-item`).innerHTML);
             let itemName = document.querySelector(`#${id} h4`).innerHTML
             console.log(noOfItem)
             noOfItem = noOfItem + 1;
             cart = getCartItems()        
             cart[originalId].no = noOfItem
             updateLocalStorage();
             updateCart();
             
         }
        })
       document.addEventListener('click',(e) =>{
        if(e.target && e.target.id == `minus${id}`){
            let noOfItem = parseInt(document.querySelector(`#${id} .no-of-item`).innerHTML);
            let itemName = document.querySelector(`#${id} h4`).innerHTML
               noOfItem = noOfItem -1;
               cart = getCartItems()
               cart[originalId].no = noOfItem
               updateLocalStorage();
               updateCart();
               
          }
        })

    }
    function updateLocalStorage(){
        if(cart[originalId].no == 0){
            delete cart[originalId];
        }
        if(cart.length == 0){
            localStorage.clear('cart')
        }
        else{
            localStorage.setItem('cart',JSON.stringify(cart));
        }
        cartIcon();
    }

    function updateCart(){
        let relatedProductsContainer = document.querySelectorAll(`.product${originalId} .add-to-cart-container`)
        if(cart[originalId] == undefined){
            relatedProductsContainer.forEach((item)=>{
                item.innerHTML = `<button class="btn add-to-cart">Add To Cart</button>`
            })
            document.querySelectorAll(`.product${originalId} .add-to-cart`).forEach((item)=>{
                item.addEventListener('click',updateAddToCartBtn)
            })
            //updateProductCards()
            //addToCartContainer.innerHTML = `<button class="btn add-to-cart">Add To Cart</button>`
            //document.querySelector(`#${id} .add-to-cart`).addEventListener('click',updateAddToCartBtn)
        }
        else{
            document.querySelectorAll(`.product${originalId} .no-of-item`).forEach((item)=>{
                item.innerHTML = `${cart[originalId].no}`
            })
        }
    }

}