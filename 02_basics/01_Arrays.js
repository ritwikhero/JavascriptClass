//Arrays
const arr = [0,1,2,3,4,5];

const heros = ["Batman","Spiderma","Superman","Hanuman"];

console.log(arr[3]);

//Array method
arr.push(-1);
console.log(arr);

arr.push(7);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(9);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(9));

console.log("A",arr);

const a1 = arr.slice(1,3);

console.log(a1);
// console.log(arr);

const b1 = arr.splice(1,3);
console.log("B",b1);

console.log(arr); 

//splice actually chnages the array structure where as slice doesn't




