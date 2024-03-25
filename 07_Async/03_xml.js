// XML ki request ko AJAX request bolte hai 
//jitni knowledge utna badhiuya 


//XMLH has all the method like ready state and so 
//ye aik class hai iska object banna hota hai 
//create a request of XML
const requestUrl='https://api.github.com/users/siddhantJH'
const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl) //takes two para method(kis type ki req) and string(it is the url)
//now we need to call the open ye apne aap me call nai hota hai to send karna hota hai call karne ke liye 
// yaha ready state one ho gay this lelkin uske bad hamne track nai kiya
//to continousky track we need to use
xhr.onreadystatechange = function (){ //jab jab state change hoti hai function execute hota hai 
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
         //return is a response text , to help the function know the context use this 
        //we can use dot notation to get the different details 
        //but undefined comes beacuse type of data is string 
        //so we need to deserialize it so convert data
        console.log(typeof this.responseText)//this comes in JSON
        const data=JSON.parse(this.responseText)
        console.log(this.responseText)
    }
}
// console.log(xhr.readyState()) //print the ready state to track it but only once but you need to track take above approach 
xhr.send()  ;


//Theory
//now whenever we send a request so request basically changes 
//the status code changes from 
//0(unsent) --- 1(opened)  ----2(headers_received) ----- 3(loading)---- 4(done)
//now these are changes lets observe how they are changes use chr.readyState()
console.log(xhr.readyState()) //print the ready state to track it 
//console.log is a debug tools it is not a part of javascript it a part of developer tool 
