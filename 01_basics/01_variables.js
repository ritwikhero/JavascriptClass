// console.log("ritwik");

const accountId = 23456;
let accountEmail = "account@email.com";
var accountPassword = "12345";
accountCity = "kolkata";
let accountState;
/*
cannot chnage constant 
acoountId is constant , i.e. const
*/

// accountId = 2;
// console.log(accountId);

// console.log(accountCity);

//use console.table gives tabular structure of data we want to print

/*
prefer not to use var
beacuse of issue in block and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);