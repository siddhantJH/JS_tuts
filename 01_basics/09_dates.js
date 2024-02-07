//---handling dates in javascript -------
//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an 
//integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

//whatever time you get you get it 

let myDate=new Date() //we get instance of the dat e
console.log(myDate)


//now we will try to convert it to string
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate =  new Date(2023,0,23,5,3)  //months starts from 0 in java script,year,month,day,time hour,time min 
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myCreatedDate1=new Date("2023-01-14")
console.log(myCreatedDate1.toLocaleString())


//we also have time stamps in date 
let myTimeStamp=Date.now()
console.log(myTimeStamp)       
//to convert it to time we do this 
console.log(myCreatedDate1.getTime()) //convert date to millisec

//to convert it to seconds 
console.log(Math.floor(Date.now()/1000))




let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());




//console.log

newDate.toLocaleString('default.',{  //helps formatting string of localeString
    weekday:"long"
})



