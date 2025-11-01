let v = true;
let f = false;
let t = [2, 5, 9, 'coucou'];

function verif (t) {
    if (t.length==0) throw "Ce tableau est vide";
    for (i=0; i<t.length; i++) {
        if (typeof(t[i]) !== "number") {
            throw "Le tableau ne doit contenir que des nombres"
        }
    }
    return true
}
console.log(verif(t))

// - que des nombres: true
// - un élément de type chaine de caractères: Le tableau ne doit contenir que des nombres
// - tableau vide: Ce tableau est vide