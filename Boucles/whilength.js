let mot = prompt("Entrez un mot de 10 lettres")

while(mot.length!=10){
    if(mot.length>10){
        alert("Trop de lettres")
    }else if(mot.length<10){
        alert("Pas assez de lettres")
    }
    mot = prompt("Entrez un mot de 10 lettres")
}
alert("Merci")