function carregar() {
    msg = document.getElementById('msg')
    img = document.getElementById('img') 
    data = new Date()
    hora = data.getHours()
    minuto = data.getMinutes()
    //hora = 11
    msg.innerHTML = (`Agora são ${hora} horas e ${minuto} minutos`)
    if (hora >= 0 && hora < 6) {
        //Boa noite!
        img.src = './img/noite2.jpg'
        document.body.style.background = "#1a3433"
    } else if (hora >= 6 && hora < 12) {
        //Bom dia!
        img.src = './img/manha2.jpg'
        document.body.style.background = "#bad0da"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = './img/tarde2.jpg'
        document.body.style.background = "#ec5b03"
    } else if (hora >= 18 && hora < 23.59) {
         //Boa noite!
         img.src = './img/noite2.jpg'
         document.body.style.background = "#1a3433"
    }
}

