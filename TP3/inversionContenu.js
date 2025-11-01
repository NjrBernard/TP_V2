let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [];

for (i=0; i<array.length; i++) {
    array2[i]=array[array.length-i-1]
}
console.log(array);
console.log('\n\n');
console.log(array2);