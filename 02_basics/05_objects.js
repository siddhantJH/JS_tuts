//Destructuring of an object 
const course={
    coursename:"Js in hindi"
    ,price:"999",
    courseInst:"Sidd"
}


console.log(course.courseInst) //bar bar . use karna is not ckear
const {courseInst:Inst} = course   //keyname:Inst is my name custom 
console.log(courseInst)  //destructuring object 
console.log(Inst)


//when ever we want our job to put on someone else we take the help of the api 
//values comes in form of json 

//no name so it willl be treasted as json and the keys are also the string
// {
//     "name":"Siddhant",
//     "coursname":"JS",
//     "price":"free"
// }


//sometimes we cget api in array format will object inside 
//[{},{},{}]   

