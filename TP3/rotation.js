let array = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;
let derniereValeur = array[array.length-1]; /* on stocke la dernière valeur de array*/


    for (let i=array.length-1; i>0; i--) { 
        /* on commence par remplacer la dernière valeur de array par l'avant dernière, 
        puis on décrement i pour remplacer l'antépénultième par l'avant dernière, etc. jusqu'à remplacer la 2e par la 1ere*/
        array[i]=array[i-1]
    }
array[0]=derniereValeur;
// La première valeur n'a pas encore été trasnformée, on la remplacer la dernière valeur du array initiale, stockée avant la boucle

console.log(array)