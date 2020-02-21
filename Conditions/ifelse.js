let choix =["un homme", "mineur", "majeur", "une femme", "mineure","majeure"];
let vSex, vAge, sex, age;
let retry=true
while(retry){
    sex = prompt ("Etes vous un Homme ou une Femme?");
    retry = sex!= "Homme" && sex!= "H" && sex!="Femme" && sex!="F";
    sex= sex=="H" || sex=="Homme";
    age = prompt ("Quel âge avez vous?");
    retry = age<1 || retry
    if(retry){
        alert("Information incorrect détectée.\nRecommencez !");
    }
}
//alert("Sorti de While OK");  // Ligne de test
if(sex) {
    vSex= 0;
} else {
    vSex= 3;
}

if(age<18) {
    vAge=vSex+1;
} else {
    vAge=vSex+2;
}

alert("Vous êtes donc "+ choix[vSex] +" et êtes "+ choix[vAge]);