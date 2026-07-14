const accountId = 144553
let accountEmail = "yash2004@gmail.com"
var accountPassword = "12334"
accountCity = "noida"
let accountState;

// accountId = 223 not allowed

accountEmail = "kes@gmail.com"
accountPassword = "122121"
accountCity = "prayagraj"

console.log(accountId)

// prefer not to use var 
// because of issue in block scope and fuctional scope 
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])
