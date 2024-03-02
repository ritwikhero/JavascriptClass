// const tinderUser = new Object(); // ---> creates singleton object

const tUser = {};
tUser.id = "01";
tUser.name = "Ritwik";
tUser.isLoggedIn = false;
// console.log(tinderUser);
// console.log(tUser);

//nested objects
const user = {
    email : "some@email.com",
    name : {
        fullname : {
            firstName : "Ritwik",
            lastName  : "Singh"
        }
    }
}

// console.log(user.name.fullname.lastName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = {obj1,obj2}; //creates nestes objects
// const obj3  = Object.assign({},obj1,obj2); //assings object to a ew empty object

//spread operator
const obj3 = {...obj1,...obj2};
// console.log(obj3);

const users = [
    {},
    {
        id : "1",
        email: "r@email.com"
    },
    {},{},
]
// console.log(users[1]);

console.log(tUser);
console.log(Object.keys(tUser));
console.log(Object.values(tUser));
console.log(Object.entries(tUser));
console.log(Object.hasOwnProperty("isLoggedIn"));
