//array 

// const myArray = [0,1,2,3,4,5,6] //uses sqyare brackstes and inside we have elments,
                                // within single variable we have multiple variable 
                                //it is dynamic can add new elements
                                //when we want to access it we use [] square brackets index starts from 0
                                //can't use string as index
                                //In array when we use copy func it makes shallow copy , shares same reference point 
//                                 //Deep copy property do not share same refrence 
// console.log(myArray[2])


// const myHeros=["spiderman","Xmen"]


// //another way of declaring array 
// const myArr2=new Array(1,2,3,4) //no square bracket is given,qutomatically adds square brackets
// console.log(myArr2[0])

//In console when we declare array and when we expand : we get length and prototype if we expand prototype we get a lot of functions inside 
//has all th eproperties like we found in String 



//--------------------Methods in Array -------------------------------//
// myArr2.push(6) //adds value in the Array from 0 to 6 
// console.log(myArr2)    //array is chaned and value gets added in the last
// console.log(myArr2.pop()) //pop's the last element in the array 


// myArr2.unshift(4) //it add's an element in the bebginning of an array and what it does is basically shift all 
//                     //to the right by one shift keeping the size same last element gets removed if no space 
// console.log(myArr2)

// myArr2.shift()   //No parameter is given first element is removed , size of array might decrease 
// console.log(myArr2)




//------------------------Some methods are questionaire

// console.log(myArr2.includes(9))  //true or false
// console.log(myArr2.indexOf(9))  //gives index of element passed inside the array 

// console.log(myArr2) //gets printed in array format 
// const myArr3=myArr2.join()

// console.log(myArr3)   //what it does is it changes the array into a string , type is changed 
// console.log(typeof myArr3)



//slice and splice 
const newArr=[1,2,3,4,5]
console.log("A ",newArr) //new ARr
const myn1=newArr.slice(1,3)//sliced part of an array but original array was not chaned
console.log(myn1) //sliced part retured by slice function , no change in original array 
console.log("B",newArr)    //printing the new Array 
const myn2=newArr.splice(1,3) //from start 1 to end 3 , element at index 3 was also included but the problem is it, 
                                //returns the sliced part and original array also got modified
console.log(myn2) // sliced part 
console.log(newArr) //get's modified



//








