
// declare varible based on the name of an object property.

const myObject = {a: 2, b: 3, c: 4, z: 5};
const {b} = myObject;
console.log(b);

// optional chaining undefined using ? mark >> console.log(myObjectt?.a?.t);

const myObjectt = {a: {
    tech: 5
    },
    b: 3, c: 4, z: 5
};
console.log(myObjectt.a.t);

// destructuring array

const [p, q] = [33, 44, 55];
console.log(p, q);