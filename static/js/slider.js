const  slidingEffect = ()=>{
    const slideContainer = document.querySelector('.slide-container')
    const slide = document.querySelector('.slides')
    const prevbtn = document.getElementById('prevBtn')
    const nextbtn = document.getElementById('nextBtn')
    const interval = 10000
    let slides = document.querySelectorAll('.slide')
    let index =1;
    let slideId
    let arrowClicked = false;
    const fistSlideClone = slides[0].cloneNode(true)
    const lastSlideClone = slides[slides.length -1 ].cloneNode(true)
    fistSlideClone.id = 'first-clone'
    lastSlideClone .id = 'last-cone'

    slide.append(fistSlideClone)
    slide.prepend(lastSlideClone)

    slideWidth = slides[index].clientWidth;
    slide.style.transform = `translatex(${-slideWidth * index}px)`
    let getslide = () => document.querySelectorAll('.slide')
    const moveSlideNext = () =>{
        slides = getslide()
        if(index >=(slides.length - 1)) return;
        index++;        
        slide.style.transform = `translatex(${-slideWidth * index}px)`
        slide.style.transition = '1s ease' 
        
       
    }


    const moveSlideprev = () =>{
        slides = getslide()
        if(index <= 0) return;
        index--;
        slide.style.transform = `translatex(${-slideWidth * index}px)`
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
            slide.style.transform = `translatex(${-slideWidth * index}px)`
            
        }
        if(slides[index].id ==  lastSlideClone.id)
        {
            index = slides.length - 2;
            slide.style.transition = 'none'
            slide.style.transform = `translatex(${-slideWidth * index}px)`
            
        }
    }

    slide.addEventListener('transitionend',()=>{
        setSlideIndex()
        console.log("index is reset");
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