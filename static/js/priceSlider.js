const rangeSlider = ()=>{

    let filter = document.querySelector('.filters');
    let mainPart = document.querySelector('.main-part');
    let maxWidthPrice = 10000;
    let minPrice = document.querySelector('.min-price');
    let maxPrice = document.querySelector('.max-price');
    let priceRange = document.querySelector('.priceRange')
    let slider = document.querySelector('.priceSlider')
    let sliderBack = document.querySelector('.priceSliderBackground')
    let sliderWrapper = document.querySelector('.price-slider-wrapper')
    let thumb1 = document.querySelector('.thumb1')
    let thumb2 = document.querySelector('.thumb2')
    let sliderMarginLeft = "";
    let filterPadding = "0px"
    //getting window maxWidthPrice
    // we use this function for setting margin,padding of filter div
    const sliderWrapperWidth = () =>{
        let width =0;
        
        if(screen.width < 376){
            width = screen.width*0.8 < 250? screen.width * 0.8: 250;
            sliderMarginLeft = "30px";
        }
        else if(screen.width < 500){
            width = 250
            sliderMarginLeft = "30px";
        }
        else{
            width = 200
            sliderMarginLeft = "10px";
            filterPadding = "20px"
        }
        return [width,sliderMarginLeft,filterPadding];
    }
    sliderWrapper.style.width = `${sliderWrapperWidth()[0]}px`
    sliderWrapper.style.marginLeft = sliderMarginLeft;
    filter.style.padding = filterPadding;
    console.log(sliderMarginLeft)
    ///////console.
    let pixelPerDoller = sliderWrapperWidth()[0]/(maxWidthPrice);
    let thumb1DefaultPosition = parseInt(minPrice.innerHTML)*pixelPerDoller - 10;
    let thumb2DefaultPosition = parseInt(maxPrice.innerHTML)*pixelPerDoller-10;  
    let maxWidth = sliderWrapperWidth()[0] - 10;   
    //setting default position
    thumb1.style.left = `${thumb1DefaultPosition}px`
    thumb2.style.left = `${thumb2DefaultPosition}px`
    let weShouldStopDefaultScrollAndZoom =false;
    let thumbs = [thumb1,thumb2]
   

    function highlightRange(){
        let sliderWidth = parseInt(thumbs[1].style.left) - parseInt(thumbs[0].style.left)
        slider.style.width = `${sliderWidth}px`
        slider.style.left = `${parseInt(thumbs[0].style.left)+10}px`
    }
    highlightRange()

    //for touch 
    thumbs.forEach((thumb,index) =>{
        thumb.addEventListener('touchstart',()=>{
            //document.ontouchmove = (event)=>onTouchMove(event,thumb,index)
            //document.ontouchend = (event)=>onTouchEnd(event,thumb)
            controlSliding(thumb,index)
        })
    })

    sliderBack.addEventListener('touchstart',event =>{
        let touchPosition = event.touches[0].clientX
        let left = touchPosition - parseInt(sliderMarginLeft)-10 - parseInt(getComputedStyle(filter).marginLeft) - parseInt(filterPadding);
        left1 = Math.abs(left - parseInt(thumbs[0].style.left));
        left2 = Math.abs(left - parseInt(thumbs[1].style.left));
        let index = left1 > left2 ? 1 : 0;
        onTouchMove(event,thumbs[index],index)
        controlSliding(thumbs[index],index)
    })

    function controlSliding(thumb,index){
        document.ontouchmove = (event)=>onTouchMove(event,thumb,index)
        document.ontouchend = (event)=>onTouchEnd(event,thumb)
    }
   
 
    function onTouchMove(event,thumb,index){
        weShouldStopDefaultScrollAndZoom =true;
        let touchPosition = event.touches[0].clientX
        let left = touchPosition - parseInt(sliderMarginLeft)-10 - parseInt(getComputedStyle(filter).marginLeft) - parseInt(filterPadding);
        console.log(left)
        if(index ==0)
        {
            if(left < parseInt(thumbs[1].style.left)-9){
                thumb.style.left = -10 <left?(`${left}px`):"-10px";    
            }
            else{
                thumb.style.left = `${parseInt(thumbs[1].style.left)-9}px`
                
            }
            minPrice.innerHTML= parseInt((parseInt(thumb.style.left)+10)/pixelPerDoller);
            
        }
        if(index ==1)
        {
            if(left > parseInt(thumbs[0].style.left)+9){
                thumb.style.left = maxWidth > left?(`${left}px`):`${maxWidth}px`;    
            }
            else{
                thumb.style.left = `${parseInt(thumbs[0].style.left)+9}px`
                
            }
            maxPrice.innerHTML= parseInt((parseInt(thumb.style.left)+10)/pixelPerDoller);
        }
        highlightRange();
        thumb.classList.add('thumbactive')
       
    }   
    function onTouchEnd(event,thumb){
        thumb.classList.remove('thumbactive')
        document.ontouchmove = null;
        document.ontouchend= null;
        weShouldStopDefaultScrollAndZoom =false;
    }

    
    window.addEventListener('touchmove', ev => {
        if (weShouldStopDefaultScrollAndZoom) {
          ev.preventDefault();
          ev.stopImmediatePropagation();
          
        };
      }, { passive: false });      
      
      




    //for mouse
    //formouse
    //for touch 
    thumbs.forEach((thumb,index) =>{
        thumb.addEventListener('mousedown',(event)=>{
            console.log("called")
            event = event || window.event;
            event.preventDefault();
            document.onmousemove = (event)=>onMouseMove(event,thumb,index)
            document.onmouseup = (event)=>onMouseUp(event,thumb)
        });  
        thumb.addEventListener('mouseover',()=>{
            thumb.classList.add('thumbactive')
        }) 
        thumb.addEventListener('mouseleave',()=>{
            thumb.classList.remove('thumbactive')
        })
    })
    sliderBack.addEventListener('mousedown',event =>{
        let touchPosition = event.clientX;
        let left = touchPosition - parseInt(sliderMarginLeft)-10 - parseInt(getComputedStyle(filter).marginLeft) - parseInt(filterPadding);
        left1 = Math.abs(left - parseInt(thumbs[0].style.left));
        left2 = Math.abs(left - parseInt(thumbs[1].style.left));
        let index = left1 > left2 ? 1 : 0;
        console.log(index)
        onMouseMove(event,thumbs[index],index)
        controlSlidingMouse(thumbs[index],index)
        
    })

    function controlSlidingMouse(thumb,index){
        document.onmousemove = (event)=>onMouseMove(event,thumb,index)
        document.onmouseup = (event)=>onMouseUp(event,thumb)
    }

    function onMouseMove(event,thumb,index){
        event = event || window.event;
        event.preventDefault();
        let touchPosition = event.clientX
        let left = touchPosition - parseInt(sliderMarginLeft)-10 - parseInt(getComputedStyle(filter).marginLeft) - parseInt(filterPadding);
        if(index ==0)
        {
            if(left < parseInt(thumbs[1].style.left)-9){
                thumb.style.left = -10 <left?(`${left}px`):"-10px";    
            }
            else{
                thumb.style.left = `${parseInt(thumbs[1].style.left)-9}px`
                
            }
            minPrice.innerHTML= parseInt((parseInt(thumb.style.left)+10)/pixelPerDoller);
            
        }
        if(index ==1)
        {
            if(left > parseInt(thumbs[0].style.left)+9){
                thumb.style.left = maxWidth > left?(`${left}px`):`${maxWidth}px`;    
            }
            else{
                thumb.style.left = `${parseInt(thumbs[0].style.left)+9}px`
                
            }
            maxPrice.innerHTML= parseInt((parseInt(thumb.style.left)+10)/pixelPerDoller);
        }
        highlightRange();
        thumb.classList.add('thumbactive2')
       
    } 
    function onMouseUp(event,thumb){
        document.onmousemove = null
        document.onmouseup = null
        thumb.classList.remove('thumbactive2')
    }

}
rangeSlider();