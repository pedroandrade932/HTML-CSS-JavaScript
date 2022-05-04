function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('figura')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12){
        //--Bom dia.
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!!!`
        img.src = 'Imagem/manhã.png'
        document.body.style.backgroundColor = 'rgb(224, 223, 131)'
    }
    else if (hora >= 12 && hora < 18){
        //--Boa tarde.
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!!!`
        img.src = 'Imagem/tarde.png'
        document.body.style.backgroundColor = 'rgb(199, 131, 42)'
    }
    else {
        //--Boa noite.
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!!!`
        img.src = 'Imagem/noite.png'
        document.body.style.backgroundColor = 'rgb(57, 2, 78)'
    }
}

