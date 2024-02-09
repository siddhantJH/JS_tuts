//es6 came in arrow function and used in this keyword 

const User={
    username:"siddhant", //for current context the username is siddhant 
    price:999,
    welcome :function()
    {
        console.log(`Welcome to website ${this.username}`) //when we want to refer to current context(object) we refer only this object 
        console.log(this)
    }
}

//This referes current context 
console.log(User.username="Siddhant")
console.log(User)


//To call a function inside the object use . notation 
User.welcome()
User.username="rohan" //this is changed and value is not harded coded and context is changed here
console.log(User)
console.log(this)  //in node enviorment when you are in node then this referes to empty parenthesis
//however inside console in browser it will print windows , browser ke ander jo object hai vo window object hai 
//now what if someone comes and change the username the context changes 



//-----------------Arrow--------------------

// function Chai()
// {
//     let username="Rohan"
//     console.log(this)  //now if we try to print the this inside a function inside the node env, than we can say that we will see the Chai()
//     console.log(this.username) //won't work inside the function
// }
// Chai() 





// const chai=function(){
//     let username="Rohan"
//     console.log(username)
// }
// chai()





//arrow function 

// const chai = ()=>{
//     let username="Siddhant"
//     // console.log(this.username)
// }
// chai()

//can hold this inside a variable 
// const numone=(num1,num2)=>{
// return num1+num2
// }
// const numtwo=(num1,num2) => (num1+num2)
// //In curly braces return must be used while in case of parenthesis no return is used 


// console.log(numone(10,20))
// console.log(numtwo(10,200))












