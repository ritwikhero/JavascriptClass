//sigleton

//object literal

// Object.create()  --> another wayof creating objects

//they are defined in key value pairs

const mySym = Symbol("Key1");
const User = {
    name : "Ritwik",
    "full name" : "Ritwik Singh",
    [mySym] : "myKey1", //syntax for writing symbol
    age : 26,
    email : "ritwik@google.com",
    isLoggedIn : false,
}

console.log(User.email); //should be avoided 
console.log(User["email"]); // is generally preffered, " " cause js treats them as string
console.log(User["full name"]) // cause of this problem 
// console.log(typeof User[mySym]);
console.log(User[mySym]);


User.email = "ritwik@email.com";
// Object.freeze(User); //after this no value will be changed in the object
User.email = "ritwik@femail.com";
console.log(User);

User.greeting = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(User.greeting());