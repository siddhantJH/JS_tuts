console.log(2>1); //gives ans in boolean 
console.log(2>=1);
console.log(2==1);
console.log(2==1);


//what happends when we don;t compare same datatype

console.log("2">1);  //give compatible operand of same datatype , means the output is not predictable so must keep the datatype same 
console.log("02">1)


console.log(null>0);
console.log(null==0);    //comparison convert null to a number , treating it as zero 
console.log(null>=0);   //not predictable result comparison and equality operator are different 
                        //comparison(>=) null get converted to 0

console.log(undefined ==0);
console.log(undefined>0)
console.log(undefined<0)

//=== check values along with datatype conversion does not happen like ==
console.log("2" === 2)
console.log("2"==2)
                        