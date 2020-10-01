export function displayFilters(){
    let filterBtns = document.querySelectorAll('.filter-btn button')
    let filterBlocks = document.querySelectorAll('.filters form div')
    let form = document.querySelector('.filters form')
    let filterFormSubmitBtn = document.querySelector('.filtersubmit')
    let filterDesiredBlocks = [];
    let filterDesiredBlocksName = ["priceRange","foodPreference","discount","cuisine"]
    filterBlocks.forEach(block => {
        if(filterDesiredBlocksName.includes(block.className)){
            filterDesiredBlocks.push(block);
        }
    });

    filterBtns.forEach((filterBtn,index )=>{
        filterBtn.addEventListener('click',()=>{
            filterDesiredBlocks.forEach(block =>{
                block.classList.remove('filter-block-active')
            })
            filterBtns.forEach(filterBtn=>{
                filterBtn.classList.remove('filter-btn-active')    
            })
            filterDesiredBlocks[index].classList.toggle('filter-block-active')
            form.classList.add('form-active')
            filterBtn.classList.add('filter-btn-active')
        })
    })
    
    filterFormSubmitBtn.addEventListener('click',()=>{
        form.classList.remove('form-active')
    })
}
