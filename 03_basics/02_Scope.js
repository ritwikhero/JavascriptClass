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

function one(){
    const username = "Ritwik";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);

    // two(); 
}
one();