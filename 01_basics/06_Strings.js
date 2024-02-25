const name = "Ritwik";

const repoCount = 26;

//old way ------
// console.log("My name is "+name+" and my repoCout is "+repoCount);

// new / better way / string interpolation

console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Ritwik");
console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("w"));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(1,4);
console.log(anotherString);

const s = "              ritwik               ";
console.log(s);
console.log(s.trim());

const url = "https:/www.ritwik.com%20/abcd"
console.log(url.replace("%","-"));
console.log(url.includes("ritwik"));