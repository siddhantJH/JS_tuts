const marvelHeroes= ["thor","ironman","spiderman"]
const dc=["superman","Ironman","flash","batman"]


// marvelHeroes.push(dc)   //modifier the original array
// console.log(marvelHeroes) //the prblem here is array ke andar array aa gaya hai, in java script 
//                          //we can have element of any datatype multiple as well 
// console.log(marvelHeroes[3][1])



//we could have used concat to join bitht he array 
Allher=marvelHeroes.concat(dc)   //It returns the new array does not modify the original array 
console.log(Allher)


AllnewHer=[...marvelHeroes,...dc] //glass thodna aur spread out karna 
console.log(AllnewHer)


//another array 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]  //this nested kind of situation
const realAnotherArray =  another_array.flat(Infinity) //returns a new array with all element of nested array included , takes arg as depth
console.log(realAnotherArray)



//when we scrap data from the website we could do it in many forms , so it might come in a lot of forms 
//but we want array 

console.log(Array.isArray("Hitesh")) //not an array so it returns false 
console.log(Array.from("Hitesh"))  //converts the string into the array 
console.log(Array.from({name:"Siddhant"})) //it will give empty array by default,so we need to mention kiska array banao keys ka ki value ka 


//suppose we have lots of values 
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //returns a new array from a set of elements





