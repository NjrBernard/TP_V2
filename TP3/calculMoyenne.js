let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let sum=0;

for (i=0; i<array.length; i++) {
    sum = sum + array[i];
}
let moy = sum / array.length;
console.log(moy)