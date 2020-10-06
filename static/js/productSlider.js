export const productSlider = (n)=>{
    let productSlidesContainerId = `#product-slider${n}`
    let productSliderContainer = document.querySelector(productSlidesContainerId)
    let productSlides = document.querySelector(`${productSlidesContainerId} .product-slides`)
    let productslide = document.querySelectorAll(`${productSlidesContainerId} .product-slide`);
    let leftControl = document.querySelector(`${productSlidesContainerId}  .left`)
    let rightControl = document.querySelector(`${productSlidesContainerId}  .right`)
    let index = 1;
    let checkAuto = true
    let slideLength = ()=> productslide.length;
    let intervalId = 0;
    let productInlastSlide = 1;
    let resetIndexValue = slideLength()-productInlastSlide;
    let widthOfSlides = () => parseInt(getComputedStyle(productSlides).width);

    if (productSliderContainer.offsetWidth >= 2*widthOfSlides()) {
        productInlastSlide = 2;
    }
    
    if (productSliderContainer.offsetWidth >= 3*widthOfSlides()) {
        productInlastSlide = 3;
    }
    
    if (productSliderContainer.offsetWidth >= 4*widthOfSlides()) {
        productInlastSlide = 4;
    }
    
    leftControl.addEventListener('click',movePrevSlide);
    rightControl.addEventListener('click',moveNextSlide);
    productSlides.addEventListener('animationend',unsetanimation);
    productSlides.addEventListener('transitionend',resetIndex)
    const autoslide = ()=>{
        
        intervalId = setInterval(() => {
            if(index = resetIndexValue+1){
                index = 0;
            }
            productSlides.style.transform = `translateX(${-100*index}%)`;           
            index++;
        }, 7000);
    }
    autoslide();

    function resetIndex(){
        if(checkAuto){
            resetIndexValue = slideLength()-productInlastSlide
            if(index == resetIndexValue+1){
                index =0;
            }
        }        
    }

    productSliderContainer.addEventListener('mouseenter',()=>{
        clearInterval(intervalId);
        checkAuto = false;
    })
    productSliderContainer.addEventListener('mouseleave',()=>{
        autoslide();
        checkAuto = true;
        console.log("this is called")
    })


    function moveNextSlide(){
        if(index == resetIndexValue){
            productSlides.style.animation = "next 0.5s ease forwards";  
        }else{
            setIndex(1);
            productSlides.style.transform = `translateX(${-100*index}%)`;
        }
    }
    function movePrevSlide(){
        if(index == 0){
            productSlides.style.animation = "prev 0.5s ease forwards";  
        }else{
            setIndex(-1);
            productSlides.style.animation = "" ;
            productSlides.style.transform = `translateX(${-100*index}%)`;
        }    
        console.log(index)
    }

    

    function setIndex(i){
        resetIndexValue = slideLength()-productInlastSlide;
        index = index +i;
        if(index >= resetIndexValue){
            index = resetIndexValue;
        }
        else if(index < 0){
            index =0;
        }
        console.log(index)
    }
    function unsetanimation(){
        productSlides.style.animation = "" ;
    }
    

}
