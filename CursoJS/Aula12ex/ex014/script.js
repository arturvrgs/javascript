function carregar() {

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = 11

msg.innerHTML = `${hora} horas.` 
if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'manhã.png' 
    document.body.style.background = '#D4C4B3'
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = 'tarde.png'
    document.body.style.background = '#EF9C36'
} else {
    //Boa noite
    img.src = 'noite.png'
    document.body.style.background = '#174C4F'
}
}