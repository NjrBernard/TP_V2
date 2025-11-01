let texte= 2;
function Maj(texte) {
    if (typeof texte !== "string") throw "Ceci nest pas une chaine de caractères";
    return texte.charAt(0).toUpperCase(0) + texte.slice(1);
}
console.log(Maj(texte))