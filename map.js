
// map
const numbers = [3, 4, 5, 6, 7];

// using map
const output = numbers.map(x => x * 2);
console.log(output);

// using  arrow function
const double = number => number * 2;
const output1 = [];
for(const number of numbers){
    const result = double(number);
    output1.push(result);
}
console.log(output1);

//using  normal function 
function doubleIt(numbers){
    const output2 = [];
    for(const number of numbers){
        const result = number * 2;
        output2.push(result);
        
    }
    return output2;
};
const number = doubleIt(numbers);
console.log(number);


