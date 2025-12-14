const accountId=144553   //The variable defined as const cannot be changed, use camel casing for naming the variable ,must initialized it during declaring. 
let accountEmail="rohan98gmail.com" //let variable can be changed , and use this for defineing a variable, no need to initialize it during declaring.
var accountPassword="12345" //not used frequently , curly braces are usually used for scoping so js. { scope },//used to have problem with scoping so do not use var has scoping problem

accountCity="Delhi" //can also be done but not good 
let accontState;  //only declaring , javascript bydefault assigns undefined to unintitalized variable.
var accountno;    //only declaring
// accountId=2    const variable changing is not allowed will throw error.
// console.log(accountId)

accountEmail = "siddhant@gmail"
accountPassword = "21212"
accountCity = "Jam"

console.log(accountno) //default undefined
console.log(accountId) 
console.log(accontState)  //if only declare but not defined than it is undefined

console.table([accountEmail,accountId,accontState ])


/*
prefer not to use var for funtional scope and 
program scope 
*/ 