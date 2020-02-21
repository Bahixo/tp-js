let choix =["un homme", "mineur", "majeur", "une femme", "mineure","majeure"];
let Vsex, Vage;
let retry=true
while(retry){
    let sex = prompt ("Etes vous un Homme ou une Femme?");
    retry = sex!= "Homme" && sex!= "H" && sex!="Femme" && sex!="F";
    sex= sex=="H" || sex=="Homme";
    let age = prompt ("Quel âge avez vous?");
    retry = age<1 || retry
    if(retry){
        alert("Information incorrect détectée.\nRecommencez !");
    }
}
//alert("Sorti de While OK");  // Ligne de test
if(sex) {
    Vsex= 0;
} else {
    Vsex= 3;
}

if(age<18) {
    Vage=Vsex+1;
} else {
    Vage=Vsex+2;
}

alert("Vous êtes donc "+ choix[Vsex] +"et êtes "+ choix[Vage]);