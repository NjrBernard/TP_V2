let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];


console.log("N'affiche que les entiers supérieurs à 3:")
for (let i=0; i<array.length; i++) {
    if (array[i]>3) {
        console.log(array[i])
    }
};
console.log('\n\n');

console.log("N'affiche que les entiers pairs:")
for (let i=0; i<array.length; i++) {
    if (array[i]%2 == 0) {
        console.log(array[i])
    }
};
console.log('\n\n');

console.log("N'affiche que les entiers aux indexs pairs:")
for (let i=0; i<array.length; i++) {
    if (i%2 == 0) {
        console.log(array[i] + ' --- index n°' + i)
    }
};
console.log('\n\n');

console.log("N'affiche que les entiers impairs:")
for (let i=0; i<array.length; i++) {
    if (array[i]%2 != 0) {
        console.log(array[i])
    }
};