
// Class, constructor, method, create object from class

class Support{
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    supportSesson(){
        console.log(this.name, 'support the class');
    }
}
const aamir = new Support('amir khan', 'BD');
const salman = new Support('salman khan', 'USA');
aamir.supportSesson();
console.log(aamir);
console.log(salman);
