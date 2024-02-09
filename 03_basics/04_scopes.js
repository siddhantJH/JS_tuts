
//global scope
let a=300
//scope is defined like this 
if(true){   //variable is declare inside if so the work of this variabel is within this 
    //block scope
    let a=10 
    const b =20
    var c=30
    console.log("Inner",a)
}
//now if a scope of a variable can be accessed here than it is a problem


//now there is no problem with a and b as thet don't get printed but c is printing the value so it is the problem 
// console.log(a);
// console.log(b);
//problem can be solved by usig the let , so var and no var is usually avoidable 
//so if some programmer comes and declare the variable with same name so this problem might come 
console.log(c)  

//now if we try to print let inside and outside we would get different value due to block and global scope 
console.log("Outer",a)


//If we go in console than global scope is different and in node it is different 
