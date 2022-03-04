
class TeamMember{
    // name;
    // designation = 'student care';
    // location = 'BD';
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
}

// support
class Support extends TeamMember{
    constructor(name, location, time){
        super(name, location)
        this.Yourtime = time;
    }
    supportSesson(){
        console.log(this.name, 'support the class');
    }
}
const aamir = new Support('amir khan', 'BD', 9);
const salman = new Support('salman khan', 'USA', 11);
aamir.supportSesson();
console.log(aamir);
console.log(salman);

// student care
class studentCare extends TeamMember{
    buildARoutine(){
        console.log(this.name, 'build a rotuine');
    }
}
const alia = new studentCare('Alia bhatt', 'mumbai');
alia.buildARoutine();
console.log(alia);