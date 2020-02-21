let appel= prompt("Indiquez le numéro de la fonction que vous souhaitez appeler?\n1.Hello\n2.42\n3.Ajouter 3\n4.Les Années\n5.Nom Prénom")

function log(x){
    console.log(x);
}

function hello(){
    console.log("Hello World");
}

function f42(){
    return 42;
}

function add3(x){
    x=Number(x);
    return x+3;
}

function year(x, y){
    x=Number(x);
    y=Number(y);
    return x+y;
}

function name(x,y){
    return x+" "+y;
}

switch(appel){
    case "1":
        hello();
        break;
    
    case "2":
        let nbr= f42();
        log(nbr);
        break;
    
    case "3":
        let nbrs= add3(prompt("Donnez moi un nombre"));
        log(nbrs);
        break;

    case "4":
        let age= prompt("Quel âge avez vous?");
        let born= prompt ("En quelle année êtes vous né(e)?");
        log(year(age, born));
        break;
    
    case "5":
        let nom=prompt("Quel est votre nom?");
        let pnom=prompt("Quel est votre prénom?");
        log(name(nom, pnom));
        break;

    default:
        alert("Error\n Veuillez rafraichir la page et recommencer");
}
