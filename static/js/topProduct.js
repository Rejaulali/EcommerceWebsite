function topProduct(){
    let topProduct = document.querySelector('.top-product')
    let filter = document.querySelector('.filters')
    let mainPart = document.querySelector('#mainPart')
    if(window.matchMedia("(min-width:769px)").matches){
        topProduct.style.width = `${mainPart.offsetWidth - filter.offsetWidth - parseInt(getComputedStyle(filter).marginRight)}px`;
    }
    
}
topProduct()