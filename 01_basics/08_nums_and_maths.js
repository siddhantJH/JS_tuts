const score=400
console.log(score)     //js automatically defines it as a number,what if it is not ?? so we use new 
const balance = new Number(100) //will make sure it will be number only
console.log(balance)

//we get 400
//we get[Number:400]  :only difference is we get an object in secong case and ionside we could see there is lot of function inside the prototype

const strNum=balance.toString()
console.log(balance.toString()) //it gets additinal property and function once we change it to string 
console.log(balance.toFixed(2)) //changing the precision value to 2 decimal point 
console.log(typeof(strNum))
const number=23.9928
console.log(number.toPrecision(3))


const hundred=100000 //to represent lot of 0's
console.log(hundred.toLocaleString('en-In'))


//Number datatype ke sath baahuat sari function hame milte hai Number.MAX_SAFE_INTEGER
//---------------MATHS-------------------
//maths library comes with java scipt by default 

console.log(Math)  //this is object in itself so print it in inspect console of browser we get Property, and Functions as well
console.log(Math.abs(-4)) //gives us the absolute value of the function + --> +. - --> +
console.log(Math.round(4.3))  //round of the value 
console.log(Math.floor(4.3))//gives us the floor 
console.log(Math.ceil(4.3)) //gives us the ceil value 
console.log(Math.sqrt(35))//gives us the square root 
console.log(Math.max(4,3,6,8))



//rnadom 

console.log(Math.random()); //we get 0.51, we get a number in range of 0 and 1 
console.log(Math.floor(Math.random()*10)+1)//to increase the range , multiply with 10 we get the number in range bw 1---9 

const min = 10
const max=20  //we want value in this range 

console.log(Math.floor(Math.random()*(max-min+1)+min)) //get a number in the range of min and max










