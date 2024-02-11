//for of loop 
// const arr=[1,2,3,4,5] 

// for (const iterator of arr) { //iterator is index like i , and object is the data str which is replaced with arr(not js object but in larger term)
//     console.log(iterator)
// }

// const greetings="Hello world!"
// for (const greet of greetings)
// {
// console.log(`Each car is ${greet}`)
// }



//Maps in javascript similar to array stores key and value remembers order ,but variation in iteration 
// const map=new Map()//stores only unique values
// map.set('IN',"India")
// map.set('USA',"United stated of america")
// console.log(map)


//looping through map 
// for (const [key,value] of map){ //array of maps gets destructured and we receive key and value seprately in different words 
//     console.log(`${key} ==> ${value}`)
// }


// const myObject={
//     'game1':'NFS',
//     'game2':'Superman'
// }


// for (const [key,value] of myObject) //gives error but it is not iteratable so this [key,value] does'nt work  
// {                                   //object ko iterate karne ke alag tarike hote hai 

// }




// const myObj={
//     js:"javascript",
//     cpp:"C++",
//     rb:'ruby',
//     swift:'swift by apple'
// }

// //how to iterate thorugh loop so we use: for in loop

// for (const key in myObj)
// {
//     console.log(key) //key get's printed
//     console.log(myObj[key]) //keys gets printed so we need to print the object 
// }



//can we use for in in arrays 

// const programming=["cpp","java","ruby"]
// for (const key in programming)
// {
//     console.log(key)  //we get the keys of the array and this key is the index 
//     console.log(programming[key])
// }


//can we use for in in map 

// for(const key in map ) //map is not iteratable so for in can't be used so we have to use the for of loop 
// {
//     console.log(key)
// }



//objects = > for in 
//arrars => for of 





//for each loop in case of array 
const coding=["js","ruby","java","python"]
//when we peint it in the console we get a lot of prototype fucntion 


coding.forEach(function (item){
    console.log(item)
}) //call back function means guve it a function and tell it what to do 
//now since it is a callback function so it does not have a name of it's own and the parentehsis gets the parameters as the values in the loop 


//another variations so lets see arrow fucntion, neither name not equals to
coding.forEach((item) =>{
    console.log(item)
})


//function printMe()
function printMe(item) //we can also pass this function to forEach loop
{
    console.log(item)
}
coding.forEach(printMe)  //refernce is gives do not exeute 



coding.forEach((item,index,arr)=>{ //the parameter need not be only item it also get a lot of other parameter 
  console.log(item,index,arr)                  //index also comes along with the object
})




const mycoding=[
    {
    languagename:"js",
    languageFile:"py"
    },
    {
    languagename:"java",
    languageFile:".class"
    }
]
mycoding.forEach((item)=>{
console.log(item.languagename)   //this item is itself a object and to use the attr use dot operator 
console.log(item.languageFile)
})
