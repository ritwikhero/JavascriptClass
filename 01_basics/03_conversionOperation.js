//NUMBER CONVERSION ---------------------------------------------------

// let score = 69;
// let score = "69abc" 
// let score = false;
let score = "hello";
// console.log(typeof(score));

let scoreNumber = Number(score); // conversion of string in number data type
// console.log(typeof(scoreNumber));
console.log(scoreNumber);

// "69" => 69
//"69abc" => NaN
// true => 1 & false => 0

// //BOOLEAN CONVERSION----------------------------------------------------

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(isLoggedIn));
console.log(typeof(booleanIsLoggedIn));

// 1 => true; 0 => false
// "" => false; "ahahha" => true

// //STRING CONVERSION ----------------------------------------------------

let num = 69;
let stringNum = String(num);
console.log(typeof(num));
console.log(typeof(stringNum));


//OPERATION -------------------------------------------------------------
let value = 1;
let negVlaue = -value;
console.log(negVlaue);

let s1 = "ritwik";
let s2 = " singh";
console.log(s1+s2);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

let counter = 100;
counter++;
console.log(counter);