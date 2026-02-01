const accountId = 14533
let accountEmail = "abc@gmail.com"
var accountPassword = "0206"
accountCity = "Patna"
let accountState;

// accountId = 2  // not allowed

accountEmail = "xyz@gmail.com"
accountPassword = "1611"
accountCity = "Noida"

console.log(accountId);

/* Prefer not to use var
   because of issue in block scope
   and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


