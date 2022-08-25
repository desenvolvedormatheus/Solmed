function abrirmenu() {
    let btnmenu = document.querySelector('.icowhats')
    let chat = document.querySelector('.chatwhatsap')

    btnmenu.style.display = 'none'

    chat.style.zIndex = '10'
    chat.style.opacity = '1'
}

function fecharmenu() {
    let btnmenu = document.querySelector('.icowhats')
    let chat = document.querySelector('.chatwhatsap')

    btnmenu.style.display = 'flex'

    chat.style.zIndex = '-1'
    chat.style.opacity = '0'
}
