//objects can be declareed in two ways literals and constructore 
//constructor(singleton banega)

//Object literat ways 
//stored as keys and values keys apne app me styring ki tarah hai
//There is special data type called as symbol now lets declraed a symbol 
const mySym=Symbol("key 1") //declared a symbol , now if we want to use this symbol as the key we can't d it directly 
                            //we need to use something as this square bracket 
const JsUser = {name:"Siddhant",age:18,location:"Jaipur",[mySym]:"mykey1",email:"rohan@gmail",isLoggedIn:false,lastLogin:["Mon","Tue"],"full name":"Siddhant Jha"}  

//In Order to access the object we could use square brackets or dot pperator 
console.log(JsUser.email)
console.log(JsUser["email"]) 
console.log(JsUser.mySym)  //it prints mykey1 , but still it is not being interpreted as a symbol
console.log(JsUser[mySym]) //if we want to use it as a symbol we need to use it as a square bracket when mentioning it as a key not by dot , dot gives the string 

//in above object we won'nt be able to access the full name usind dot operator so we much use dot opeartror, so we mush use square brackets 
console.log(JsUser["full name"])


//to change the vlaues 
JsUser.email="siddhant23098"
console.log(JsUser)

//if we want to freez the object 
// Object.freeze(jsUser) //now if we try to change it the changes won't get propagated into the main object 


JsUser.greeting = function()
{
    console.log("Hello js user"); 
    console.log(`${this.name}`)   //if i want to refernce any name present inside the JsUser object we use this way 
}                                  //use this to refernce same object 

console.log(JsUser.greeting) //get function reference 
console.log(JsUser.greeting()) //we get undefined, one execution is done autimatically
 

