//make a code reusable 

//function definition 
function sayMyName(){
console.log("Sidd")
console.log("Jha")
}

sayMyName //only reference not calling 
sayMyName()  //execution of the function 

//these are called parameters
function addTwoNumbers(num1,num2)
{
    //check the datatype of the number 
    return num1+num2 //returning the result back where the function is called no line below is executed
}

//these are called arguments
console.log(addTwoNumbers(10,20))
const res=addTwoNumbers(10,20)
console.log(res)


//we could also store tne reuslt in a variable 
//in how many different ways a value can be given to the user s


function loginUserMes(username="Rohan")  //could also give default value, If won't run
{
    if(username===undefined)   //undefined ko man liya jata hai undefined   (!userName)
    {
        console.log("please enter the user name")
        return 
    }
return `${username} just logged in`  //use backticks below esc button 
}

console.log(loginUserMes("Siddhant"))
console.log(loginUserMes())

