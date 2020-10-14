import cartIcon from "./cartIcon.js"
import cart from "./main.js"
export const shoppingCart =(id)=>{
    let addToCart = document.querySelector(`#${id} .add-to-cart`)
    let addToCartContainer = document.querySelector(`#${id} .add-to-cart-container`)
    if(cart[id] != undefined){
        addToCartContainer.innerHTML = `<button class="btn minus" id="minus${id}"> - </button>
            <span class="no-of-item">${cart[id]}</span>    
            <button class="btn plus" id="plus${id}"> + </button>
        `
    }
    
    addToCart.addEventListener('click',updateAddToCartBtn)
    function updateAddToCartBtn(){
        addToCartContainer.innerHTML = `<button class="btn minus" id="minus${id}"> - </button>
            <span class="no-of-item">1</span>    
            <button class="btn plus" id="plus${id}"> + </button>
        `
        cart[id] = 1;
        updateCart();
        updateLocalStorage();
        
    }
   document.addEventListener('click',(e) =>{
       if(e.target && e.target.id == `plus${id}`){
           let noOfItem = parseInt(document.querySelector(`#${id} .no-of-item`).innerHTML);
           console.log(noOfItem)
           noOfItem = noOfItem + 1;
           cart[id] = noOfItem
           updateCart()
           updateLocalStorage();
           
       }
   })
   document.addEventListener('click',(e) =>{
    if(e.target && e.target.id == `minus${id}`){
        let noOfItem = parseInt(document.querySelector(`#${id} .no-of-item`).innerHTML);
           console.log(noOfItem)
           noOfItem = noOfItem -1;
           cart[id] = noOfItem;
           updateCart();
           updateLocalStorage();
           
    }
    })
    function updateLocalStorage(){
        if(cart[id]==0){
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
            
            console.log("deleted")
            addToCartContainer.innerHTML = `<button class="btn add-to-cart">Add To Cart</button>`
            document.querySelector(`#${id} .add-to-cart`).addEventListener('click',updateAddToCartBtn)
        }
        else{
            document.querySelector(`#${id} .no-of-item`).innerHTML = `${cart[id]}`
        }
    }

}