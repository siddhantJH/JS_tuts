// const nyNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newnum=nyNumbers.map((num)=>{
//     return num+10
// }) //agian it receives call back

// console.log(newnum)


//filter can return a lot of thing
const nyNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newnum=nyNumbers.map((num)=>{
//     return num+10
// }) //agian it receives call back

// console.log(newnum)

//chaining , second map ka num previous num ka result pass hoga 
const newNum=nyNumbers.map((num)=> num*10).map((num)=>num+1).filter((num)=>num<50) //we can use more than one map or chaining like this 
console.log(newNum)

//filter does true and false
//map does operatiom