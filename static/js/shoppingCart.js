import cartIcon from "./cartIcon.js"
import getCartItems from "./main.js"
export const shoppingCart =(id)=>{
    let addToCart = document.querySelector(`#${id} .add-to-cart`)
    let addToCartContainer = document.querySelector(`#${id} .add-to-cart-container`)
    let cart = getCartItems()
    if(cart[id] != undefined){
        addToCartContainer.innerHTML = `<button class="btn minus" id="minus${id}"> - </button>
            <span class="no-of-item">${cart[id]}</span>    
            <button class="btn plus" id="plus${id}"> + </button>
        `
    }
    if(addToCart != null){
        addToCart.addEventListener('click',updateAddToCartBtn)
    }else{
        addToCartContainer.innerHTML = `<button class="btn add-to-cart">Add To Cart</button>`
        document.querySelector(`#${id} .add-to-cart`).addEventListener('click',updateAddToCartBtn)
        cartIcon()
        /* this is called by carticon we remove an element from cart*/
    }
    function updateAddToCartBtn(){
        addToCartContainer.innerHTML = `<button class="btn minus" id="minus${id}"> - </button>
            <span class="no-of-item">1</span>    
            <button class="btn plus" id="plus${id}"> + </button>
        `
        cart = JSON.parse(localStorage.getItem('cart'))
        cart[id] = 1;
        updateCart();
        updateLocalStorage();
        
    }
   document.addEventListener('click',(e) =>{
       if(e.target && e.target.id == `plus${id}`){
           let noOfItem = parseInt(document.querySelector(`#${id} .no-of-item`).innerHTML);
           noOfItem = noOfItem + 1;
           cart = JSON.parse(localStorage.getItem('cart'))        
           cart[id] = noOfItem
           updateCart()
           updateLocalStorage();
           
       }
   })
   document.addEventListener('click',(e) =>{
    if(e.target && e.target.id == `minus${id}`){
        let noOfItem = parseInt(document.querySelector(`#${id} .no-of-item`).innerHTML);
           noOfItem = noOfItem -1;
           cart = JSON.parse(localStorage.getItem('cart'))        
           cart[id] = noOfItem;
           updateCart();
           updateLocalStorage();
           
    }
    })
    function updateLocalStorage(){
        if(cart[id]==0){ cartIcon();
            delete cart[id];
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
        if(cart[id] == 0){
            addToCartContainer.innerHTML = `<button class="btn add-to-cart">Add To Cart</button>`
            document.querySelector(`#${id} .add-to-cart`).addEventListener('click',updateAddToCartBtn)
        }
        else{
            document.querySelector(`#${id} .no-of-item`).innerHTML = `${cart[id]}`
        }
    }

}