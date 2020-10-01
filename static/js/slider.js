const  slidingEffect = ()=>{
    const slideContainer = document.querySelector('.slide-container')
    const slide = document.querySelector('.slides')
    const prevbtn = document.getElementById('prevBtn')
    const nextbtn = document.getElementById('nextBtn')
    const interval = 2000
    let slides = document.querySelectorAll('.slide')
    let index =1;
    let slideId;
    let slideOriginalLength = slides.length;
    let arrowClicked = false;

    //adding javascript button in slide
    let playSlideBtn = document.querySelector('.play-slide-btn')
    for(let i=0;i<slides.length;i++){
        let labelchild = document.createElement("div")
        labelchild.id =`radio${i}`
        playSlideBtn.appendChild(labelchild);
    }
    // collect radio buttons
    let radioBtns = document.querySelectorAll('.play-slide-btn div');
    const fistSlideClone = slides[0].cloneNode(true)
    const lastSlideClone = slides[slides.length -1 ].cloneNode(true)
    fistSlideClone.id = 'first-clone'
    lastSlideClone .id = 'last-cone'

    slide.append(fistSlideClone)
    slide.prepend(lastSlideClone)
    let getslide = () => {
        return document.querySelectorAll('.slide')
    }
    slideWidth = slides[index].clientWidth;
    slide.style.transform = `translatex(${-slideWidth * index}px)`
    const changeRadioBackground = (index) =>{
        radioBtns.forEach(btn =>{
            btn.style.background ="none"
        })
        if(index <= slideOriginalLength && index != 0){
            radioBtns[index-1].style.background = " white";
        }else if(index > slideOriginalLength)
        {
            radioBtns[0].style.background = "white"
        }
        else{
            radioBtns[slideOriginalLength-1].style.background = "white"
        }
        
        
    }
    changeRadioBackground(index)
    

    const manualControlradio = ()=>{
        radioBtns.forEach((btn,key)=>{
            btn.addEventListener('click',()=>{
                index = key;
                moveSlideNext()
            })
        })
    }
    manualControlradio();
    const moveSlideNext = () =>{
        slides = getslide()
        if(index >=(slides.length - 1)) return;
        index++;        
        slide.style.transform = `translatex(${-slideWidth * index}px)`
        changeRadioBackground(index);
        slide.style.transition = '1s ease' 
        
    }

    const moveSlideprev = () =>{
        slides = getslide()
        if(index <= 0) return;
        index--;
        slide.style.transform = `translatex(${-slideWidth * index}px)`
        changeRadioBackground(index);
        slide.style.transition = '1s ease' 
    }
    
    
    const autosliding = ()=>{
        slideId = setInterval(() => {
            moveSlideNext()                   
        }, interval);    
    }
    autosliding()


    const setSlideIndex = () =>{
        slides =getslide()
        if(slides[index].id ==  fistSlideClone.id)
        {
            index = 1;
            slide.style.transition = 'none'
            changeRadioBackground(index)
            slide.style.transform = `translatex(${-slideWidth * index}px)`
                        
        }
        if(slides[index].id ==  lastSlideClone.id)
        {
            index = slides.length - 2;
            slide.style.transition = 'none'
            changeRadioBackground(index)
            slide.style.transform = `translatex(${-slideWidth * index}px)`
            
        }
    }

    slide.addEventListener('transitionend',()=>{
        setSlideIndex()
    })
    slideContainer.addEventListener('mouseenter',()=>{
        clearInterval(slideId);
    })
    slideContainer.addEventListener('mouseleave',autosliding)
    
    nextbtn.addEventListener('click',()=>{
        
        moveSlideNext()
    })
    prevbtn.addEventListener('click',()=>{
        
        moveSlideprev()
    })
    
      

}

slidingEffect()