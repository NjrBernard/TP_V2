let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8] ;

let com=0;
for (let i = 0; i<array1.length; i++) {
    let n=array1[i];
        for (let i2 = 0; i2<array2.length; i2++) {
            if (n == array2[i2] ) {
            com = com +1;
            break;
            }    ;
        }
    };
console.log(com)