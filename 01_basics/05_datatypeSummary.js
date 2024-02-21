// Primitive--------------------------------------------------------------------

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userName;

const id = Symbol("123");
const anotherId = Symbol('123');

console.log(id === anotherId); //symbol is different for even same value
console.log(typeof(score));  // score and scorevValue is the same datatype
console.log(typeof(scoreValue));
console.log(typeof(isLoggedIn));
console.log(typeof(outsideTemp));
console.log(typeof(userName)); //undefined cause no value assingned

let bigNum = 34343434343434343434343434344343434343434n
//Reference (Non Primitive)--------------------------------------------------------

//Arrays, Objects, Functions

const heroes = ["spiderman","batman","superman"];

console.log(heroes);

const myObject = {
    name : "ritwik",
    age : "26"
}

console.log(myObject);

let myFunction = function fn(){
    console.log("inside function");
}

console.log(typeof(heroes));
console.log(typeof(myObject));
console.log(typeof(myFunction));
console.log(typeof(bigNum));
