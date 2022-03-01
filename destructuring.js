
// Destructuring Object to extract values to variables

const fish = {id: 50, name: 'Hilsha', price: 900, phone: '7152343555', address: 'Chadpur', dress: 'Silver'};

const phone = fish.phone;

const {id, name, price, address} = fish;
console.log(id, price, address);

// multiple lines in a object

const company = {
        name: 'GP',
        ceo: {id: 3, name: 'lala', work: 'ceo'},
        web: {work: 'website', employee: 22}
};
const {work, employee} = company.web;
console.log(work, employee);