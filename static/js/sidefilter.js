const sidefilter = ()=>{
    let searchForm = document.querySelector('#productSearch')
    let searchinput1 = document.querySelector('#id_category');
    let searchinput2 = document.querySelector('#productSearch2 .search-box input');
    let discountStart = document.querySelector("#id_discount_start")
    let discountEnd = document.querySelector("#id_discount_end")
    let minPrice = document.querySelector("#minPrice")
    let maxPrice = document.querySelector("#maxPrice")
    searchinput2.placeholder = "Enter Category"
    searchinput2.value = searchinput1.value
    let searchbtn = document.querySelector('#productSearch2 .search-box a')
    searchbtn.addEventListener('click', () => {
            if(searchinput2.value != ""){
                searchinput1.value = searchinput2.value
                discountStart.value = minPrice.innerHTML
                discountEnd.value = maxPrice.innerHTML
                searchForm.submit()
            }else{
                alert("Please Enter Something")
            }
            event.preventDefault()
        })
    let searchbtn2 = document.querySelector('#submitFilterBtn2')
    searchbtn2.addEventListener('click', () => {
            if(searchinput2.value != ""){
                searchinput1.value = searchinput2.value
                discountStart.value = minPrice.innerHTML
                discountEnd.value = maxPrice.innerHTML
                searchForm.submit()
            }else{
                alert("Please Enter Something")
            }
            event.preventDefault()
        })

}
sidefilter()

    
