/*Javascript 
It is Synchronous :It is executed line by line 
And it is Single Threaded : 
*/

// Promises: Promise object represent the eventual completition and failure
//of the task abhi ke abhi complete nai hoga queue me dala jaega 
//jaise hi hoga notify kar diya jaega.
//promise future me complete hota hai 
//there are three states in promises

/* 
pending : initial state neighter fullfilled nor rejected
fullfilled : meaning that the opeation was completed successful
rejected : meaning that the operation failed
*/

//we will see a lot of primises
//we can create a promise as well but mostly they are consumed and not only created
// fetch('http:').then().then()  before leaning all these we must know hot to create the 
//promises
//agar response aaega to then me aaega error hoga to catch me aa jaega aur finally 



//How to create a promises, they are object in themselve which represent eventual completition  
const promiseOne = new Promise((resolve,reject)=>{
    //Do an async task like DB calls nw calls etc
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000) //what does resolve and reject do ??
    //now we have createtd the promise now we need to consume it as well 
}) 
//recently added in js6
//now we have create the reference of the promise 
//inside promise we will give the callback as parameter
//this function has two part resolve and reject 
//inside the call back we will do the async task


//to consuime the promise we use 
promiseOne.then(function(){
    console.log("promise consumed")
}) //direct connection to resolve it takes the functiona as argument who's 
//argument is jo bhi upar se return hua hai vo yaha aya hai ,to connect the reolve and then 
// we need to use resolve() from inside thte promiseOne




//Another way 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynce task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})  
//This is connected to the above resolve , to connect it call the resolve(inside the async task )
//3rd way of making a promise



const promiseThree=new Promise(function(resolve,reject){
    //we were told that resolve is directly connected to then 
    setTimeout(function(){
        resolve({
            username:"chai",
            email:"code"
        }) //if we want while connect reolve with then we can pass a value as well 
            //usually we pass a object 
    },1000)
})



promiseThree.then(function(e){ //isi ke andar sari value return hoti hai yahi main return karwanga
    //this e receives the data sent from above 
    console.log(e)
})
            



//4th promise
const promisefour=new promise(function(resolve,reject){
    setTimeout(function(){
        let error=true//suppose whatever we did failed
        if(!error){
            resolve({username:"sidd",pass:"123"})
        }else{
            reject('somethig went wrong') //when our task fails we need to pass error as well 
        }
    },1000)
})

promisefour.then((user)=>{ 
    console.log(user)
    return user.username //suppose we have recveived the user object but now we only want to deal with the username so we can pass the username and receove it in another cahained then()
}).then((username)=>{
    console.log(username)
}).catch(function(error){
console.log(error)
}).finally(function(){ //this will always execute , it is used for cleaning purpose
console.log("promise is either resolved or rejected")
})


//5Th type of promise
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true//suppose whatever we did failed
        if(!error){
            resolve({username:"sidd",pass:"123"})
        }else{
            reject('js went wrong') //when our task fails we need to pass error as well 
        }
    },1000)
})

//promise future me hone wali aik chiz hai 
//zaruri nai hai ki hamesha aap usko then catch se handle kare 
//async await se bhi kar sakte hai 

//thodi der wait karta hai kam hone ka ho jata hai tabhi continute karta hai , only dis is 
async function consumePromiseFive(){
    // const res= await promiseFive //jo bhi resolve hoke aae yaha milega ye promise aik eventual completiton object 
    // console.log(res)   //agar isme error aa sakti hai to isme aapki error handle karna hoga to puri chiz ko try catch me kar dijiye 
                        //kyoki aapka ye wala code reject error code ke return type ko handle nahi kar sakta
    try{
        const res= await promiseFive  
        console.log(res)
    }catch(error){
        console.log(error);
    }
}


// consumePromiseFive()
// async function getAllUsers(){
//     try{
//     const res=await fetch('url') //it returns you the promise isko await kardo aur res me hold kar do 
//     const data=await res.json() //this also takes time so we need to await this as well 
//     console.log(data)
// }catch(error){
//     console.log("error occured")
// }
// }

// getAllUsers()//we did'nt get all the user so bound then in try catch block 



// //Another Method
// fetch('url').then((response)=>{
//     return response.json()
// })
// .then((res)=>{
// console.log(res)
// })
// .catch((error)=>{
//     console.log(error)
// })