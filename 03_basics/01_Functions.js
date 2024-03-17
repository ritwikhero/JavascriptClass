function name(){
    console.log("Ritwik");
}

name();

function sum(a,b){
    return a + b;
}

console.log(sum(1,1));

//rest operator
function calcualteCartPrice(...num1){
    return num1;
}
//returns an array of the given input
console.log(calcualteCartPrice(100,200,400,500,2000));

const user = {
    username : "Ritwik",
    age : "26"
}


function handleObject(object){
    console.log(`the name is ${object.username} and the age is ${object.age}`);
}
//type check is important here the attributes should be present in the object even the spelling should be macthed
handleObject(user);


const arr = [100,200,400,500,2000];

function returnSecond(num){
    return num[1];
}

console.log(returnSecond(arr));

