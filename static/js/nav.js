const nav = () =>{
	let navbar  = document.querySelector('nav');
	let remainBody = document.querySelector('.remain-body')
	window.onscroll = () => {
	  if (document.documentElement.scrollTop > 28) {
	    	navbar.style.position = "fixed"
	    	navbar.style.top = "0"
	    	navbar.style.zIndex = "10"
	    	navbar.style.background = "white"
	  }else{
	  		navbar.style.position = "relative"
	    	navbar.zIndex = "3"

	    	navbar.style.background = "transparent"
	  }

	};
}
nav()