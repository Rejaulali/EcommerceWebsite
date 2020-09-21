let menuDisplay = true
function showMenu(){
    menuDisplay = !menuDisplay
    let menu = document.getElementById('menu');
    if(menuDisplay){
        menu.style.width='0%';
    }
    else{
        
        menu.style.width='100%';
    }
}
