//This is literally an object Literal object 
const user={
username:"Siddhant",
loginCount:8,
signedIn:true,
//making a function 
//this keywork means we are talking about current context 
getUserDetails:function(){
    console.log("got user details from the databse")
    console.log(`${this.getUserDetails}`)
    //what will happend if  we try to print 
    console.log(this)   //This prints the entire object inside of which it is present in 

    //what happens if we try to print the user name directly 
    console.log(`Username: ${this.username}`)    
   ///console.log(`Username: ${username}`) //prints undefined isko pata hi nai hai user variable kya hai
    //bahar se jab aapko saman lena hai to aapko batana hoga bahar kagha se bhi saman lena  hai  
}
}


console.log(user.loginCount)
console.log(user.getUserDetails())  //this print undefined 
console.log(this) //this prints empty paranthese mean global context me kuch nai hai ,
//it keeps on changing as browser has a lot of other things as well like api and function 
//node enviorment me kam hai conbtext aur browser level me jjyada context hai 
//agar user two banana padega to firse sab banana hoga , so we take help from a class structure 

//new keywork help us in making a new context constructor function run 
//karne ke kam aata hai 
//whenever we call a constructor it gives a new copy new context 




function User1(username,loginCount,isLoggedIn){
this.username=username
this.loginCount=loginCount
this.isLoggedIn=isLoggedIn

//we can wite fucntion inside function as well 
this.greeting=fucntion(){
console.log("hello")
}



return this
}

let userOne=User1("Siddhant",12,true)//we are passing the value to the 
//constructor and in js we have a built in constructor 



console.log(userOne)  //it will print the entire context now if we want to 
//it will have various other things as well like crypto and etc
//make another userTwo we will see that the data get overwritten 
//so we try to use new which give a new context to the variable 



