import {shoppingCart} from './shoppingCart.js'
import cartIcon from './cartIcon.js';
import {updateProductCards} from "./updateProductCards.js"
let reload = false;
localStorage.setItem('load',false)

/**** for search***/
const expandsearch = () => {
    let searchForm = document.querySelector('#productSearch')
    let searchbox = document.querySelector('.search-box');
    let searchinput = document.querySelector('#id_category');
    searchinput.placeholder = "Enter Category"
    let brand = document.querySelector('.brand');
    let searchbtn = document.querySelector('.search-box a')
    let closesearchbtn = true;
    let searchaction = false;
    let selectDomOrNot = true;
    /** checking mouse is present or not*/

    localStorage.setItem('mouseDetected',true)
    const getMouseCheck =()=>{
        let check = JSON.parse(localStorage.getItem('mouseDetected'))
        return check
    }
    let mouseDetected = getMouseCheck();
    if(mouseDetected){  
            searchbtn.addEventListener('click', (e) => {
            let discountStart = document.querySelector("#id_discount_start")
            let discountEnd = document.querySelector("#id_discount_end")
            let minPrice = document.querySelector("#minPrice")
            let maxPrice = document.querySelector("#maxPrice")
            discountStart.value = minPrice? minPrice.innerHTML:0
            discountEnd.value = maxPrice? maxPrice.innerHTML:100
            var x = window.matchMedia("(max-width: 535px)");
            if (x.matches) {
                searchinput.style.width = '201px';
                brand.style.display = 'none'
                searchbtn.style.background = 'white'
                if (closesearchbtn || searchinput.value == "") {
                    e.preventDefault();
                }
                else{

                    searchForm.submit()
                }
                searchaction = true
                selectDomOrNot = false;
                closesearchbtn = false;
                }
                else{
                    if(searchinput.value != ""){
                    searchForm.submit()
                    }else{
                        alert("Please Enter Something")
                    }
                
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


        }
    function onTouchMove(e) {
      document.querySelector('nav').removeEventListener('touch', onTouchMove);
      localStorage.setItem('mouseDetected',false)
      mouseDetected = getMouseCheck()
      console.log("touch is detected")
        if(!mouseDetected){  
        searchbtn.addEventListener('touch', (e) => {
        let discountStart = document.querySelector("#id_discount_start")
        let discountEnd = document.querySelector("#id_discount_end")
        let minPrice = document.querySelector("#minPrice")
        let maxPrice = document.querySelector("#maxPrice")
        discountStart.value = minPrice? minPrice.innerHTML:0
        discountEnd.value = maxPrice? maxPrice.innerHTML:100
        var x = window.matchMedia("(max-width: 535px)");
        if (x.matches) {
            searchinput.style.width = '201px';
            brand.style.display = 'none'
            searchbtn.style.background = 'white'
            if (closesearchbtn || searchinput.value == "") {
                e.preventDefault();
            }
            else{

                searchForm.submit()
            }
            searchaction = true
            selectDomOrNot = false;
            closesearchbtn = false;
            }else{
                if(searchinput.value != ""){
                searchForm.submit()
                }else{
                    alert("Please Enter Something")
                }
            
            }

        })
        searchinput.addEventListener('touch', () => {
        var x = window.matchMedia("(max-width: 535px)");
        if (x.matches) {
            selectDomOrNot = false
        }
    })
    document.addEventListener('touch', () => {
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


    }

    }
    document.querySelector('nav').addEventListener('touch', onTouchMove);


    /** clicks**/
    
    
/* touch events for search bar*/

    



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

/*******           Some Shopping Function            ********/


const getCartItems = ()=>{
    let cart = {}

    if(localStorage.getItem('cart') != undefined){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
    return cart
}

export default getCartItems;
updateProductCards()


/********end********/
//shoppingCart();

cartIcon();

const handlePriceRange = ()=>{
    let discountStart = document.querySelector("#id_discount_start")
    let discountEnd = document.querySelector("#id_discount_end")
    discountEnd.type = "hidden"
    discountStart.type = "hidden"
}
handlePriceRange()


const activateLink = () =>{
    let page = document.querySelector('#page')
    if(page.value == 'home'){
        let link = document.querySelector('#home-link')
        link.classList.add('active')
        link.style.color = "white"
    }

    if(page.value == 'category'){
        let link = document.querySelector('#category-link')
        link.classList.add('active')
        link.style.color = "white"
    }
    if(page.value == 'contact'){
        let link = document.querySelector('#contact-link')
        link.classList.add('active')
        link.style.color = "white"
    }
    if(page.value == 'about'){
        let link = document.querySelector('#about-link')
        link.classList.add('active')
        link.style.color = "white"
    }
    if(page.value == 'profile'){
        let link = document.querySelector('#profile-link')
        link.classList.add('active')
        link.style.color = "white"
    }
}
activateLink()


window.addEventListener('resize',()=>{
    if(reload){
        location.reload()
    }
    else{
        reload = true;
    }
})

