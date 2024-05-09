// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
// {} ==> scope of a lnaguage

// if(true){
//     // let a = 10;
//     const b = 20;
//     var c = 30; 
// }
// // console.log(a);
// // console.log(b);
// console.log(c);

//var is avoid as it violates scope

// function one(){
//     const username = "Ritwik";

//     function two(){
//         const website = "Youtube";
//         console.log(username);
//     }
//     // console.log(website);

//     // two(); 
// }
// one();

// if(true){
//     const username = "Ritwik";
//     if(username === "Ritwik"){
//         const website = "Youtube";
//         console.log(username + website);
//     }
//     console.log(website);
// }
// console.log(username);


// ------------------ Interesting -----------------------------------------------


function addOne(num){
    return num+1;
}

console.log(addOne(5));

const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5));