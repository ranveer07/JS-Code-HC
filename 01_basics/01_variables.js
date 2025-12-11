const accountId = 11123;
let accountEmail = 'rvk@google.com';
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState; //undefined

// accountId = 23444  // not allowed 


accountEmail = "RK@google.com";
accountPassword = "2323232";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var becuse of issue in block scope and functional scope.
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
