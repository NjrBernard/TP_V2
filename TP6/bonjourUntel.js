let n = 2;
function bonjour (n) {
    if (typeof n !== "string") {
        throw "Erreur, veuillez entrer une chaine de caractères"
    }
    return "Bonjour " + n;
}
console.log(bonjour(n))