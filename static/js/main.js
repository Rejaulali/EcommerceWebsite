const expandsearch = () => {
    console.log("this is called")
    let searchbox = document.querySelector('.search-box');
    let searchinput = document.querySelector('.search-box input');
    let brand = document.querySelector('.brand');
    let searchbtn = document.querySelector('.search-box a')
    let closesearchbtn = true;
    let searchaction = false;
    let selectDomOrNot = true;
    searchbtn.addEventListener('click', (e) => {
        var x = window.matchMedia("(max-width: 535px)");
        if (x.matches) {
            searchinput.style.width = '201px';
            brand.style.display = 'none'
            searchbtn.style.background = 'white'
            if (closesearchbtn || searchinput.value == "") {
                e.preventDefault();
            }
            searchaction = true
            selectDomOrNot = false;
            closesearchbtn = false;
        }
       
    })
    searchinput.addEventListener('click', () => {
        var x = window.matchMedia("(max-width: 535px)");
        if (x.matches) {
            console.log(searchinput.value =="")
            selectDomOrNot = false
            

        }
    })
    document.addEventListener('click', () => {
        var x = window.matchMedia("(max-width: 535px)");
        if (x.matches) {
            
            if (selectDomOrNot) {
                searchinput.style.width = '0px';
                brand.style.display = 'block'
                searchbtn.style.background = 'none'
                closesearchbtn = true;
            }
            selectDomOrNot = true

        }

    })

    let burger = document.querySelector('.burger');
    let navLinks = document.querySelector('.nav-links')
    let navlist = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click',()=>{
        navLinks.classList.toggle('nav-active');
        console.log("burger is listening")
        console.log(navlist)
        navlist.forEach((link,index) =>{
            link.style.animation = `linkanimation 0.2s ease forward ${index/9 + 0.1}s`
        })

    })

}
expandsearch()
