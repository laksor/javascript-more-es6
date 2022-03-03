
// filter (return all)
// exp: 1
const numbers = [4, 55, 77, 9, 21, 10];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);

// exp: 2
const obj = [
    {name: 'hilsha', price: 2, address: 'chadpur', color: 'pink'},
    {name: 'hil', price: 5, address: 'barisal', color: 'black'},
    {name: 'sha', price: 9, address: 'chandan', color: 'pink'},
    {name: 'sha', price: 1, address: 'chandan', color: 'black'},
];
const expensive = obj.filter(product => product.price > 6);
console.log('expensive:', expensive);

const black = obj.filter(product => product.color == 'black');
console.log('filter: ', black);

// find (return only one element)

const pink = obj.find(product => product.color == 'pink');
console.log(pink);