let t = [];
let somme = 0;

function moy() {
    if (t.length === 0) 
        {throw "Ce tableau est vide"}
    for (let i = 0; i < t.length; i++) {
        if (typeof t[i] !== "number") {
            throw "Le tableau ne doit contenir que des nombres"
        }
        somme = somme + t[i]
    }
    return somme / t.length
}

console.log(moy(t))

// que des nombres: calcule la moyenne
// inclus une chaine de caractères: renvoie throw Le tableau ne doit contenir que des nombres
// tableau vide: renvoie throw Ce tableau est vide