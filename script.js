let searchBtn = document.querySelector('.searchBtn')
let closeBtn = document.querySelector('.closeBtn')
let seachBox = document.querySelector('.seachBox')
let seachBoxInput = document.querySelector('input')

searchBtn.addEventListener('click',()=>{
    seachBox.classList.add('active')
    searchBtn.classList.add('active')
    closeBtn.classList.add('active')
    seachBoxInput.focus()
})

closeBtn.addEventListener('click',()=>{
    seachBox.classList.remove('active')
    searchBtn.classList.remove('active')
    closeBtn.classList.remove('active')
    seachBoxInput.value = ""
})