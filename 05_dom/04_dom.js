//how to add element 


//creates element and hold it in var
const div=document.createElement('div') //the variabel will containe the elmenet div 
console.log(div)

//add property in the elmeent 
div.className="main"
div.id="myId"
div.id=Math.round(Math.random()*10+1)

//how to set custom attribute 
div.setAttribute("title","generated_titlle") //better optimised techniques half RTT does the job 
div.style.backgroundColor="green"
div.style.padding="12px"
div.innerText="chai and code"


//how Till now the div is int he memeory 
//not in the page
//how to make the element visible in web page 
const node=document.createTextNode("chai aur code")
//text node is created and stored in node now store it in the div
div.appendChild(node) 

//now add the div in the document chil node 
document.body.appendChild(div)


//we could wrap the above thing in a function and 
//pass a argument and store runt he function 
//make it reusable 