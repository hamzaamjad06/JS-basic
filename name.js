const accountId = 144553
let accountEmail = "hamza@gmail.com"
var accountPassword = "12345"
accountCity = "lahore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hamza@ google.com"
accountPassword = "2121"
accountCity = "okara"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])