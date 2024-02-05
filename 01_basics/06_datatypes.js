/*notes of datatype*/

//primitive datatypes : copy is given and dhcnages done in copy

//7 types:String ,Number , Boolean , null, undefined,Symbol make things unique,BigInt
const score=100  //js is dynamically types language, in typescipr const:Int was given 
const scoreValue =  100.3 //decimal
const loggedIn=false
const outsideTemp = null // completely empty
let userEmail;  //undefined value
const id = Symbol('123') //value is passed , return type is also a datatype but unique
const anotherId = Symbol('123')
console.log(id===anotherId)
const bigNumber = 345678888881313123123



//non primite(reference types): Arrays,Objects,Functions 

const heroes = ["shaktiman","hatim","doga"] //reference type 
let obj={    //object are defined within curly braces and values are kept as key value pair
    name:"rohan",
    age:24
}
//can also put funtion in a variable 
const myFunc= function(){
    console.log("Hello World")
}

//****************typeof of all above datatype************** */
console.log(typeof bigNumber)


//Stack (Primitive):Copy of a variable is given when changes are made than that changes are made on copied value,
//Heap (non-primitive):reference is gives changes made on original value


