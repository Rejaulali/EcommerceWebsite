import cartIcon from "./cartIcon.js"
import getCartItems from "./main.js"
export const shoppingCart =(id, cartIconCalled = false)=>{
    let addToCart = document.querySelector(`#${id} .add-to-cart`)
    let addToCartContainer = document.querySelector(`#${id} .add-to-cart-container`)
    let productAnchorTag = document.querySelector(`#${id} .quick-view-wrapper a`)
    let originalId = productAnchorTag.href.slice(30)
    let cart = getCartItems()
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
    }else{
      cartIcon()
    }


    function updateAddToCartBtn(){
        addToCartContainer.innerHTML = `<button class="btn minus" id="minus${id}"> - </button>
            <span class="no-of-item">1</span>    
            <button class="btn plus" id="plus${id}"> + </button>
        `
        let itemName = document.querySelector(`#${id} h4`).innerHTML
        cart = getCartItems()
        cart[originalId] = {no:1,name:itemName};
        updateCart();
        updateLocalStorage();
        
    }
    if(!cartIconCalled){
        document.addEventListener('click',(e) =>{
         if(e.target && e.target.id == `plus${id}`){
             let noOfItem = parseInt(document.querySelector(`#${id} .no-of-item`).innerHTML);
             let itemName = document.querySelector(`#${id} h4`).innerHTML
             console.log(noOfItem)
             noOfItem = noOfItem + 1;
             cart = getCartItems()        
             cart[originalId] = {no:noOfItem,name:itemName};
             updateCart()
             updateLocalStorage();
             
         }
        })
       document.addEventListener('click',(e) =>{
        if(e.target && e.target.id == `minus${id}`){
            let noOfItem = parseInt(document.querySelector(`#${id} .no-of-item`).innerHTML);
            let itemName = document.querySelector(`#${id} h4`).innerHTML
               noOfItem = noOfItem -1;
               cart = getCartItems()
               cart[originalId] = {no:noOfItem,name:itemName};
               updateCart();
               updateLocalStorage();
               
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
        if(cart[originalId].no == 0){
            addToCartContainer.innerHTML = `<button class="btn add-to-cart">Add To Cart</button>`
            document.querySelector(`#${id} .add-to-cart`).addEventListener('click',updateAddToCartBtn)
        }
        else{
            document.querySelector(`#${id} .no-of-item`).innerHTML = `${cart[originalId].no}`
        }
    }

}