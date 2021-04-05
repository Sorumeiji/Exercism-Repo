
// How to Create an Empty Array in JavaScript

function usingArrayConstructor() {
    const arr = Array();
    //let arr1 = Array();
    console.log(arr);
}

function usingSquareBrackets(){   
    const arr = [];
    console.log(arr);
}

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const vegetables = ['Tomato', 'Poatato', 'Cabbage' , 'Onion', 'Carrot'];
const animalProducts = ['Milk', 'Meat', 'butter', 'yogurt'];
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'];
const countries = ['Finland', 'Denmark', 'Sweden', 'Norwary', 'Iceland'];

// print the array and its length

console.log('Numbers: ', numbers);
console.log('Number of numbers: ', numbers.length);

console.log('Fruits: ', fruits);
console.log('Number of fruits: ', fruits.length);

console.log('vegtables: ', vegetables);
console.log('Number of Vegitables: ', vegetables.length);

console.log('Animal Producs: ', animalProducts);
console.log("Number of Animal Products: ", animalProducts.length);

console.log('Web Techs: ', webTechs);
console.log('Number of Web Technologies: ', webTechs.length);

console.log('Countries: ', countries);
console.log('Number of contries: ', countries.length);


// Array can have items of different data types

const arr = [
    'Asabeneh',
    250,
    true,
    {country: 'Finland', city: 'Helsienki'},
    {skills: [ 'HTML', 'CSS', 'JS', 'React', 'Python']}
];

// Creating an array using split

let js = 'JavaScript';
const charInJavaScript = js.split('');

// Accessing array items using index

const fruit = ['banana', 'orange', 'mango', 'lemon'];
let firstFruit = fruit[0];


// An Array is mutable ( modifiable) Once an orray is created, we can modify the conents of the arrary elemetns
const nums = [1, 2, 3, 4, 5];
nums[0] = 10;
nums[4] = 6;

console.log(nums);

// Ways to manipature an array

// length
// concat
// indexOf
// slice 
// splice 
// join 
// toString 
// includes
// lastIndexOf 
// isArray
// fill 
// push 
// pop 
// shift 
// unshift


const arr_1 = Array();
console.log(arr);

const eightEmptyvalues = Array(8);

// fiil
const eightXValues = Array(8).fill('X');


