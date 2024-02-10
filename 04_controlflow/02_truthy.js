//truthy and falsy


const userEmail="Rohan98qwerty"


if(userEmail) //we have'nt done comparison so we assumned it to be true if it contains email, empty string is false
{
    console.log(`got user email ${userEmail}`)
}else{
    console.log(`User email error `)
}   




//falsy values :  false, empty string , 0 , -0, BigInt 0n , null , undefined , NaN

//truthy : true, "0",string , 'false', " ", string ke andar kuch bhi add ho gai to vo truthy value hai function(){}
//if(userEmail.length ===0){
//     console.log("array is empty ")

// }

// if(Object.keys().length()!==0)
// {

// }else{
//     console.log("empty")
// }


//Nullish Coalescing Opeartor  (??)  null undefined
//what it does is bascially jo null value aai hai 
//to uska safety check kar ya null assign kar de ya value jo aai hai data base me 
//taki mai handle kar saku , error handling ke case me kam aata hai ye 
//null ?? 10 ?? 10 pehele jo value aa jae apart from null wahi consider hoga 


//ternary opeartor 

// const icetea=100