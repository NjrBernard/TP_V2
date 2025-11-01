let texte= 'Hello world';
function Maj(texte) {
    return texte.charAt(0).toUpperCase(0) + texte.slice(1);
}
console.log(Maj(texte))