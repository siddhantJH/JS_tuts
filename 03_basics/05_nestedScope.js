// //A function can contain inside another function 
// function one()
// {
//     const userName="Siddhant"
//     function two()
//     {
//     const website="youtube"
//     console.log(userName)
//     }
//     //console.log(website) //here we will get an error which is because we can't access the website as it scope is only till the curly braces 
//     two()  //two gets executed
// }

// one()//one gets executed
//now we can see that one is bigger so two() can ask one() for the variabel and not one() 




// if(true)
// {
//     const username="Sidd"
//     if(username == "Sidd")
//     {
//         const website="youtube"
//         console.log(username+website)
//     }
//     // console.log(website) //gives error as website scope is only inside the curly braces 
// }
// console.log(username) //error as scope of user name is not here 




//--------------------------------------------------------------
addone(5) //can call below a function or above a finction no error 
function addone(value)
{
return value+1
}



// addTwo(5) //causes an error 
const addTwo = function(num)   //this is called function express , a variable can hold expression as well 
{
    return num+2
}

addTwo(5) //can only be called below a function expression 

