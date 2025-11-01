let a = "n";
let b = 6;
function calcul (a,b) {
    if (typeof a !== "number" || typeof b !== "number" )
        throw "Veuillez entrer 2 nombres"
    return a * b + a + b
}
console.log(calcul(a,b))

// En cas de valeurs a et b en format numérique, la fonction fait le calcul
// Si une des variables est une chaine de caractère, il y a contaténation