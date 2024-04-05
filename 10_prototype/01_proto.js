function createUser(username,score)
{
this.username = username
this.score = score 
//delacre your own function 

}

console.log(createUser.prototype)  
//.prototype iss function ka this hai 
//now we know that prototype has a lot of fucntion as well
//now the question is can we inject any other function into the prototype 

createUser.prototype.increment = function(){
    this.score ++  //jisne bhi use kiya hai uske pas jao. 
}
createUser.prototype.printMe =  function(){
    console.log(this.score)
}

//now i have created two different user and i want the incremenet fubcntion to 
//know which use he is currently handling so for that we need to 
//use this keyword.
const chai = createUser("Siddhant",25)  //whichever all new fucntion you have added in createUser you have to tell the chai 
const tea = createUser("Tea",250)       //but how will you tell the chai , for that we will use the new keyword
                                        //noew the chai know use kya  kya kam karna hai



//how ever in case of array we just use the map
//aapko bar bar prototype use karne ki zarurat nai hai prototype wale function ke liye 
//cannot read properties of undefined.



/*




*/



