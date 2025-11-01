function majusculePremiereLettre(chaine) {
    let mot = chaine.split(" ");   
    for (let i = 0; i < mot.length; i++) {
        mot[i] = mot[i].charAt(0).toUpperCase() + mot[i].slice(1);
    }
    return mot.join(" ");
}

let phrase = "bonjour tout le monde";
let resultat = majusculePremiereLettre(phrase);
console.log(resultat); 