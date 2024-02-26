//Number--------------------------------------------------------------------
const score = 500;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 12123.349;
console.log(otherNum.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE); // many other function with number are there

//Maths-----------------------------------------------------------------------

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(6.5));
console.log(Math.ceil(4.3));
console.log(Math.floor(6.9));
console.log(Math.min(2,6,8,4,1));
console.log(Math.max(2,6,8,4,1));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min);




