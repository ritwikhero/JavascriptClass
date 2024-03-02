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

