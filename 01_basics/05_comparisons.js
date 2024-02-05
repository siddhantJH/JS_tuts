console.log(2>1); //gives ans in boolean 
console.log(2>=1);
console.log(2==1);
console.log(2==1);


//what happends when we don;t compare same datatype

console.log("2">1);  //give compatible operand of same datatype 
console.log("02">1)


console.log(null>0);
console.log(null==0);       //equality null does'nt get converted to 0
console.log(null>=0);   //not predictable result comparison and eauality operator are different 
                        //comparison null get converted to 0

console.log(undefined ==0);
console.log(undefined>0)
console.log(undefined<0)

//=== check values along with datatype conversion does not happen like ==
console.log("2" === 2)
console.log("2"==2)
                        