//objects using singleton 

//no difference in below two method 

const tinderUser= new Object() //singleoton object
const tinderUser1={}   //non singleton object 

tinderUser1.id = "123abc"
tinderUser1.name="Sam"
tinderUser1.isLoggedIn=true

console.log(tinderUser1)
console.log(tinderUser1)  //non differencen between these two
console.log(tinderUser1)   //no difference well se empty object 




//now lets just make a regular use 
//we can have object inside object and we can use consecutive dots nested dots to access element 
//if we dont know what's inside we can use ?. operator
const regularUser={
    email:"rohan98qwerty",
    fullname:{
        userfullname:{
            firstnane:"Siddhant",
            lastname:"Jha"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname)

//there moght be case we get to combine the object 
const Obj1={1:'a',2:'b',3:'c',4:'d'}
const Obj2={5:'a',6:'c',7:'e'}

//combine both object 
const obj3={Obj1,Obj2}
console.log(obj3)  //does'nt printed as we wanted same as array puts whole object inside another object 


const obj4=Object.assign({},Obj1,Obj2) //can also use the curly braces in first arg(target), copy all enurable objevct to target object 
console.log(obj4)
// console(target===obj4) true


//we can also use the spreading in ibject 
const obj5={...Obj1,...Obj2}
console.log(obj5)

//usually when user come from database , It comes as an array of objects 
const User = [
    {
        id:1,
        email:"Rohan98qwerty"
    },
    {
        id:1,
        email:"siddhant98rules"
    }
]

console.log(User[1].email) //to target a specific user use the square bracket and key value 
console.log(Object.keys(User)) //all the keys of the tinder use will come as an array 
console.log(Object.values(User))
console.log(Object.entries(User))
console.log(tinderUser.hasOwnProperty("isLoggedIn")) //give property name to ask whether it has any property like that 

console.log()//if we try to print object we cpould also see some poperty and prototype which has ib built function as well 














