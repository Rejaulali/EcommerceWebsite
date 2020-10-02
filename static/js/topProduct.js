export function topProduct(){
    let topProduct = document.querySelector('.top-product')
    let filter = document.querySelector('.filters')
    let mainPart = document.querySelector('.main-part')
    if(screen.width >769){
        topProduct.style.width = `${mainPart.offsetWidth - filter.offsetWidth - parseInt(getComputedStyle(filter).marginRight)}px`;
    }
    
    console.log(parseInt(getComputedStyle(filter).marginRight))
    
}