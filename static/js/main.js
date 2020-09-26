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
    let line = document.querySelectorAll('.burger div')
    let cross = false
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        line[0].classList.toggle('line1active')
        line[1].classList.toggle('line2active')
        line[2].classList.toggle('line3active')
        let index = 0;
        if (cross) {
            navlist.forEach((link) => {
                link.style.animation = ""
            })

        }
        else {
            navlist.forEach((link) => {
                if (link.classList != 'dropdown-link') {
                    link.style.animation = `linkanimation 0.2s ease forwards ${index / 10 + 0.15}s`
                    index++;
                }
                else {
                    
                }

            })
            
        }
        cross = !cross;

    })
}
expandsearch()
