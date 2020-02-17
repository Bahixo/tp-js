let year = 2020;
let born = prompt("En quelle êtes vous né(e)?");
let majeur = year-born>= 18; //histoire de voir un peu les booléens

if(majeur){
    switch (year-born){/*j'ai choisi de calculer à chaque fois pour éviter d'utiliser une variable mais on aurait pu mettre le calcul dans "let age" et utiliser "age", à voir suivant la récurence*/
        case 18:
            alert("Bravo vous venez d'être majeur, attention à l'abus d'alcool !");
            break;
        
        case 42:
            alert("La réponse universelle !");
            break;
        
        case 50:
            alert("Le demi-siècle: Encore un effort bientôt la retraite !");
            break;

        case 100:
            alert("Incroyable, vous êtes centenaire et savez utiliser un ordinateur !");
            break;

        default:
            alert("Vous avez donc "+ (year-born) + "ans.");
            break;
    }   
}else{
    alert("Accès interdit aux mineurs, rangez votre pioche et faites demi-tour !")
}