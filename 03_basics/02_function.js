//how many ways to guve argument 


//val1,val2,...num1  //first values goes in val1, 2nd in val2 and anotgher in num1
function calculateCartPrice(...num1) //use rest operator for args, now num1 will become an array 
{
return num1
}

console.log(calculateCartPrice(2,3,4,5,6)) //lots of value are passing



const user={
    username:"Siddhant",
    price:199
}

function handleObj(anyObj)
{
console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

handleObj(user) //we could also pass object to the user,we get
                            //undefined because 
handleObj({   //we can pass object directly 
    username:"Sidd"
    ,price:"399"
})
