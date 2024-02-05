/****************Operations**************************/

let value = 3
let negVal=-value
// console.log(negVal)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/3)
console.log(2%3)


/*concatenate*/ 
let str1="hitesh"
let str2=" hitesh"
let str3=str1+str2
console.log(str3)

/*str with int*/
console.log(1+"2") //12
console.log("1"+2) //12
console.log("1"+"2") //12
console.log("1"+2+2) //122
console.log(1+2+"2") // 32
console.log(3*3%4/6)

/*To primitive guidelines*/
//don't depend on these kind of guidelines use parenthesis and this is really confusing
console.log(+true) //now on writing + this become confusing and true apne app me number hai to +dene par vo convert ho jata hai 1 pe.
console.log(+"") //"" boolean me convert me false hota hai to + lagane pe 0 milta hai number pe convert hone par

let num1,num2,num3
num1=num2=num3 = 2+2 // now appretaiable code no consistensy


let gameCounter =100
gameCounter++   //increment the number by 1 better to use gameCounter=gameCOunter+1,prefix and postfix logic
console.log(gameCounter)



