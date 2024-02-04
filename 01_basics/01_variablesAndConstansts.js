const accountId=144553   //The variable defined as const cannot be changed, use camel casing for naming the variable 
let accountEmail="rohan98gmail.com" //let variable can be changed , and use this for defineing a variable.
var accountPassword="12345" //not used frequently , curly braces are usually used for scoping so js 
//used to have problem with scoping so do not use var has scoping problem
accountCity="Delhi" //can also be done but not good 
let accontState;  //only declaring 

// accountId=2    const variable changing is not allowed 
// console.log(accountId)

accountEmail = "siddhant@gmail"
accountPassword = "21212"
accountCity = "Jam"


console.log(accountId)
console.log(accontState)  //if only declare but not defined than it is undefined

console.table([accountEmail,accountId,accountCity])


/*
prefer not to use var for funtional scope and 
program scope 
*/ 