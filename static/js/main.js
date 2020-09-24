const showMenu = () =>{
    console.log("this is called")
    let burger = document.querySelector('.burger');
    let cross = document.querySelector('.cross');
    let menu = document.querySelector('.menu-container');
    let navLinks = document.querySelectorAll('.menu li')
    let dropdown = document.querySelector('.dropdown')
    burger.addEventListener('click',() =>{
        menu.classList.toggle('nav-active')
        burger.style.filter = 'blur(5px)'
        let index = 0;
        navLinks.forEach((link) =>{
            listclass= link.className;
            if(!(listclass == 'dropdownlist'))
            {
                link.style.animation = `navLink 0.3s ease forwards ${index/9 + 0.3}s`;
                index +=1;
            }
        })
    })
    cross.addEventListener('click',() =>{
        menu.classList.toggle('nav-active')
        burger.style.filter = 'blur(0px)'
        navLinks.forEach((link,index) =>{
            link.style.animation = ""
        })
    })
    let add = false
    dropdown.addEventListener('click',() =>{
       let ul = document.querySelector('.dropdownul');
       add =!(add)
       if(add)
       {
            ul.classList.add('dropactive')
        }
       else{
        ul.classList.remove('dropactive')
       }
       
       console.log("this is called")
    })
    
}
showMenu();
