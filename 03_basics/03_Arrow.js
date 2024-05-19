// const user = {
//     username : "Ritwik",
//     price : 999,
    
//     welcomeMessage : function(){
//         console.log(`${this.username} welcome to website`); //this refers current context here
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username = "Rishik";
// user.welcomeMessage();

// console.log(this);

// Arrow function-------------------------------------------------------->

// function chai(){
//     let username = "Ritwik"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Ritwik"
    console.log(this);
}
chai();

//explict arrow fn
const addTwo = (a,b) =>{
    return a + b;
}

//implicit arrow fn

const addTwo = (a,b) => (a+b);

console.log(addTwo(1,2));