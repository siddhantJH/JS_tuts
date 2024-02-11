//reduce js function 




const num=[1,2,3,4]
const initialValue=0
const sumWithInitial=num.reduce(
(accumulator,currentValue)=> accumulator+currentValue,
initialValue
);
//how does this works 
//first time the initialValue goes inside the accumulator , as it does'nt know what to take 
//first time when loop runs the initialValue =0 goes into accumulator , so acc ke andar 0 hogi 
//then accumulatror current value  so accumulator becomes 1.
console.log(sumWithInitial)






