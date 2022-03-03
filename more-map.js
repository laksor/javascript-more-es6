
// map string array, array of objects map

// exp : 1
const fNames = ['maya', 'lala', 'ara', 'ahmed', 'harare'];
const fLength = fNames.map(friends => friends.length);
console.log(fLength);

// exp: 2
const obj = [
    {name: 'hilsha', price: 2, address: 'chadpur'},
    {name: 'hil', price: 5, address: 'barisal'},
    {name: 'sha', price: 9, address: 'chandan'},
];
const pNames = obj.map(product => product.name);
console.log(pNames);
const pPrice = obj.map(product => product.price);
console.log(pPrice);
