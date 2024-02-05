let score=33
console.log(typeof score)  // ususally datatype comes from front end so we don't know what it is in the front end 


let score1 = "33"
console.log(typeof score1)


//now i have received a value in string but we want to perform the operation using the number
let valueInNumber = Number(score)  //data type is changed but if the score is a number within quotes
console.log(typeof valueInNumber)   //however if the number within the string contains the number and alphabets than it will give NaN
                                    //if the score contains null than on converting it to number will results in 0
                                    //if we assign a boolean in score than on converting it to a number will give us 0/1
                                    //if score contains null now on doing Number(scpre) gives us 0 which also a number type 


//"33" --> 33
//"33abc" -->NaN    now if we try to print the Number(score) than it will print number but insted it was'nt a number actually
//true = > 1; false => 0


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)    
console.log(booleanIsLoggedIn)   //gives us true , if we convert empty string it gives false, if we convert string we get true

// 1 ==>true
//"" ==>false
//"rohan" => true


