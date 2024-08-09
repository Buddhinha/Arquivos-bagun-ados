 function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //good morning 
        img.src = "imgs/demanha.png"
        document.body.style.background = '#66c1f1' 
    }

    else if (hora >= 12 && hora < 18) {
        // good afternon  
         img.src = "imgs/tarde.png"
         document.body.style.background = '#cbaf30'  
    }

    else {
        //good night  
        img.src = "imgs/noite.png"
        document.body.style.background = '#1e4a71'
    }

}