let v = true;
let f = false;
let t = [];

function verif (t) {
    if (t.length==0) {return false};
    for (i=0; i<t.length; i++) {
        if (typeof(t[i]) !== "number") {
            return false
        }
    }
    return true
}
console.log(verif(t))

// - que des nombres: true
// - un élément de type chaine de caractères: false
// - tableau vide: false