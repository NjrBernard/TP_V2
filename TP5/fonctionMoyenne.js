let t = [2, 9, "coucou"];
let somme = 0;

function moy() {
    if (t.length === 0) { return 0; }
    for (let i = 0; i < t.length; i++) {
        somme = somme + t[i]
    }
    return somme / t.length
}

console.log(moy(t))

// que des nombres: calcule la moyenne
// inclus une chaine de caractères: renvoie NaN
// tableau vide: renvoie 0