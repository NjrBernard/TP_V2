let tableau1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tableau2 = [-1, 12, 17, 14, 5, -9, 0, 18] ;

let tableauSomme = [];
for (let i = 0; i<tableau1.length || i<tableau2.length; i++) {
    if (i >= tableau1.length) { 
        tableauSomme[i] = tableau2[i];
    } /* Si i est supérieur à la taille du tableau1, on affecte la valeur de tableau2[i]*/

    else if (i >= tableau2.length) {
        tableauSomme[i] = tableau1[i];
    } /* Si i est supérieur à la taille du tableau2, on affecte la valeur de tableau1[i]*/

    else {
        tableauSomme[i] = tableau1[i] + tableau2[i]
    } /* Sinon on ajoute tableau1[i] + tableau2[i]*/
}
console.log(tableauSomme)