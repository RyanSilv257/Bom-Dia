let hora = new Date().getHours();
let saudacao = ""

if ( hora >= 6 && hora <= 12) {
    saudacao = "Bom Dia!"
}

else if (hora >= 13 && hora <= 18) {
    saudacao = "Boa Tarde!"
}

else {
    saudacao = "Boa Noite!"
}

console.log(saudacao)

document.getElementById("resultado").innerHTML = saudacao