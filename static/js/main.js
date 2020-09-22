const showMenu = () =>{
    console.log("this is called")
    let burger = document.querySelector('.burger');
    let cross = document.querySelector('.cross');
    let menu = document.querySelector('.menu-container');
    let navLinks = document.querySelectorAll('.menu li')
    burger.addEventListener('click',() =>{
        menu.classList.toggle('nav-active')
        burger.style.filter = 'blur(5px)'
        navLinks.forEach((link,index) =>{
            link.style.animation = `navLink 0.3s ease forwards ${index/9 + 0.3}s`;
        })
    })
    cross.addEventListener('click',() =>{
        menu.classList.toggle('nav-active')
        burger.style.filter = 'blur(0px)'
        navLinks.forEach((link,index) =>{
            link.style.animation = ""
        })
    })
}
showMenu();
