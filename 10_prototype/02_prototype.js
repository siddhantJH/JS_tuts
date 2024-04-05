let myName="Siddhant   "
console.log(myName)
console.log(myName.js)
console.log(myName.trueLength) // want to define this function which removes the extra spaces so we want the 
                                //function of trim and all other fucntion insid ethis trueLength function
                                //now here comes the use of prototype 
                                //in order to use the prototype function 


//so to define new function trueLength we will use the below syntax
let anotherUserName="Chai aur Code     "

String.prototype.trueLength = function()
{
console.log(this) //it gives use Chai aur Code 
console.log (`True length is ${this.trim().length}`)
}

anotherUserName.trueLength()


// //to agar hamne object ke andar hi power daldi to jo bhi ho wheather string , array , functon 
// //sab object hi hai to unpar bhi ye inherit ho jaega 
// Object.prototype.trueLength = function(){
//     console.log(`hitesh is present in all object`)
// }

// console.log(myName.trueLength()) //myName ke oas trueLength wali power aa gai hai 
// //agar mai power sird myName ko du to ky vo object ke pas jaega 

// String.prototype.trueLength1 = function(){
//         console.log(`hello boys`)
// }

// console.log(myName.trueLength1())






// /************Inheritence*********/

// const Teacher={
//     makeVideo:true
// }
// const TeachingSupport = {
//     isAvailable:false
// }

// const TASupport = {
//     makeAssignment : 'JS assignment',
//     fullTime:true,
//     __proto__:  TeachingSupport//prototype ko reference karlo Teaching Support se ,aap kisi aur ki property ko access kar sakte ho 
// }                               //TA support se agar koi new lagake object banao ke to TeachingSupport ki property mil jaegi 



// Teacher.__proto__=  User//giving the access of property of user to the Teacher
// const User = {
//     name:"chai"
// }

// //However all the above approaches is little outdated so the new approach that we should use is 
// Object.setPrototypeOf(TeachingSupport,Teacher) //TeachingSupport Teacher ki sari property inherit karlo 

