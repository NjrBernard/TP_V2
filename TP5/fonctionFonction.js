function f(n) {
    return function j(nb) {
        return nb * n
    }
}

let v1 = f(5);
let v2 = f(8);

console.log(v1(10));
console.log(v2(10))