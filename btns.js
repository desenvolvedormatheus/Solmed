function abrir_menubar(){
    let btn0 = document.getElementsByClassName('fechar-menu')[0]
    let btn1 = document.getElementsByClassName('fechar-menu')[1]
    let btn2 = document.getElementsByClassName('fechar-menu')[2]
    let menu = document.querySelector('.menu-header')

    let aux = window.getComputedStyle(menu).right

    if(aux == '-132px'){
        btn0.style.position = 'absolute'
        btn0.style.transform = 'rotate(45deg)'
        
        btn1.style.display = 'none'
        
        btn2.style.position = 'absolute'
        btn2.style.transform = 'rotate(-45deg)'
    
        menu.style.right = '4rem'
    } else{
        btn0.style.position = 'initial'
        btn0.style.transform = 'rotate(0deg)'
        
        btn1.style.display = 'initial'
        
        btn2.style.position = 'initial'
        btn2.style.transform = 'rotate(0deg)'
    
        menu.style.right = '-11rem'
    }
}