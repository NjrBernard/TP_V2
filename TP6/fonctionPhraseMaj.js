function majusculePremiereLettre(chaine) {
    
    if (typeof chaine !== "string") throw "Ceci nest pas une chaine de caractères";
    let mot = chaine.split(" ");   
    for (let i = 0; i < mot.length; i++) {
            mot[i] = mot[i].charAt(0).toUpperCase() + mot[i].slice(1);
    }
    return mot.join(" ");
}

let chaine = 2;
let resultat = majusculePremiereLettre(chaine);
console.log(resultat); 