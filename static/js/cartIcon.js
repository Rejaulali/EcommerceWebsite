import { shoppingCart } from "./shoppingCart.js"

const cartIcon =()=>{
    let cartBadge = document.querySelector(".cart-badge")
    let cartValueSpan = document.querySelector(".cart-badge span")
    let cart = JSON.parse(localStorage.getItem('cart'))
    let bubbleList = document.querySelector(".bubble ul")
    const totalItems=()=>{
        let total=0
        for(let item in cart){
            total= total + cart[item];
        }
        return total
    }

    const styleBadge = ()=>{
              
        cartBadge.style.width = `${parseInt(getComputedStyle(cartValueSpan).height) + 4}px`
        cartBadge.style.height = `${parseInt(getComputedStyle(cartValueSpan).height) + 4}px`
        cartBadge.style.top = `${-parseInt(getComputedStyle(cartValueSpan).height)/2}px`
        cartValueSpan.innerHTML = totalItems()
        cartBadge.style.opacity= '1'
        if(cartValueSpan.innerHTML == 0){
            cartBadge.style.opacity = '0'
        }
    }
    styleBadge();
    //this product function give me name and quantiy of each product
    const product = ()=>{
        let productDetail = []
        for(let item in cart){
            let name =document.querySelector(`#${item} h4`).innerHTML
            let number = cart[item]
            productDetail.push({name:name.replace(/\s+/g,' ').trim(),number,key:item})
        }
        return productDetail
    }
    const styleBubble = () =>{
        let productDetail = product()
        bubbleList.innerHTML ="";
        if(productDetail.length != 0){
            productDetail.forEach((product) =>{
                let name =product.name.length < 10?product.name:product.name.slice(0,10)
                console.log("product name length "+ name)
                let list = document.createElement('li')
                list.id = product.key
                list.className = "item"
                list.innerHTML = `
                    <div>
                        ${product.name.length < 12?product.name:product.name.slice(0,12)+".."}
                    </div>
                    <div class='item-q'>
                        ${product.number}
                    </div>
                `
                bubbleList.append(list)
                list.addEventListener('click',()=>{
                    delete cart[product.key]
                    localStorage.setItem('cart',JSON.stringify(cart));
                    list.parentNode.removeChild(list)
                    shoppingCart(product.key)
                    
                })
                
            })
            let button = document.createElement("button")
            button.classList = "btn cart-btn"
            button.innerHTML="Check Out"
            bubbleList.appendChild(button)
        }
        else{
            bubbleList.innerHTML="<li>cart is empty</li>"
        }
        
    }
    styleBubble()
}
export default cartIcon