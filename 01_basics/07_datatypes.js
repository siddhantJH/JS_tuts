const name = "hitesh"
const repoCount=50

//to concatenate
console.log(name+repoCount+"")   //this is good but this is not good outdated 


//use backticks called as string interpolation , write you variabel within ${}
console.log(`Hello my name is ${name} and height is ${repoCount}`)//benifit is things can be don on the go


//string is somewhat interesting
console.log("hello")


//one more way to dec a string
const newGame=new String('Siddhant')//on printing it console we will see a object as a  dictionary , key as number 
                                    //value as a char, now there are lot of function's as well 

console.log(newGame[0])
console.log(newGame.__proto__)//here we will receive the obecjt might seems empty but it is not 
console.log(newGame.length) //length is a property , like this we can use methods as well 
console.log(newGame.toUpperCase())//we have not written __proto__, this does not modify original string.
console.log(newGame.charAt(3))//tells us where the character is present at which pos
console.log(newGame.indexOf('t'))

//how to slice 
const newString=newGame.substring(0,4) //last index is not included,negatuve values does'nt work
console.log(newString)

const anottherString=newGame.slice(0,4) //works same as above but accepts negative index as well, reverse se start hoga
console.log(anottherString)

const newString1="   hitesh   "  //what if the word as extra character
console.log(newString1)  //without trimming
console.log(newString1.trim())  //with trimming

const newString2="Siddhant"
console.log(newString2.replace('Sid','Ve'))     //how to remove the % from the url or one character with another first= what to replace, second = from what
console.log(newString2.includes('ddh'))  //checks whether a part of string is present or not 



const newString3="Siddhant Jha is Good Boy"
console.log(newString3.split(' '))   //gives us an array of tokens or words present in a sentence