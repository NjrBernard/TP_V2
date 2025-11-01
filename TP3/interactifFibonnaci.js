let n=10;
let tableau =[];
let i=0;
tableau[0]=0;
tableau[1]=1;
while (n>i+2) {
    tableau[i+2]=tableau[i]+tableau[i+1];
    i++;
}
console.log("Nombre de Fibonnaci de rang " + n + " :");
console.log(tableau[n-1] + "\n\n");
console.log(tableau)
