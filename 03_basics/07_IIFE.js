//NAMED IIFE
(function chai(){ //parameter is accepted here
    console.log(`DB connected`)
})(); //parameter is passed here
//we have seen previously that the using parenthesis we need not have to use a return state mentso we can wrap our functiona round the parenthesis 
//this is called iife : global scope ke pollution ko hatane ke liye iffee is used 
//now this function isinvoked but it don't know where to stop the execution 
//of the function so end it use  ; semicolor 



//Unnamed iife
((name)=>{
    console.log(`${name}`)
})("Siddhant");