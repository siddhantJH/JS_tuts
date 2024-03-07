document.getElementById('')
//it is a method and we pass a id 
//we get a entire value along with the tag 


document.getElementById('title').class //causes error 
document.getElementById('title').className //works correctly 


//to select an attribute of an element 
//we can select any attribute using this strategy 
document.getElementById('title').getAttribute('id')  //means we want the id attribute of the title id element 


//How to set an attribute
document.getElementById('title').setAttribute('class','test') 
//first select an attribute 
//then set the attribute
//now if you observe it will overrite the previous one 




//storing in a variable 
const title=document.getElementById('title')
//now we can use this title and we can insert various style elmeent 
title.style.backgroundColor="red"
title.style.padding="15px"
title.style.borderRadius="10px"



//how to get a content 
title.innerHTML // gives everything the tags including the tags and spans
title.innerText // gives only the visible text
title.textContent // gives all the text including the context


//how to get element by class 
document.getElementsByClassName('heading')


//query selector 
document.querySelector('h1')  //gives us first h1 gives us entire tag along with attribute
document.querySelector('.heading')
document.querySelector('#title')
document.querySelector('input[type="password"]')


//change color
const ull=document.querySelector('ul')//gives us entire ul
const lil=ull.querySelector('li') //select the li withing that ul
lil.style.backgroundColor="green"
lil.style.padding="10px"
lil.innerText="hello" //can change the text content also 


//query selector all returns us nodeList not exactly an 
//array so foreach is given but map is not available 
const lilist=document.querySelectorAll('h1') //gives all the h1 in form of node list 
//but we can't change the lilist directly
//so we need to use [ ] indexing to target an element 
lilist[0].style.color="green"


//storing the node list in a variable 
const myh1=document.querySelectorAll('h1')//since page has only one h1 still we get a node list as a return type 
myh1.forEach((h)=>{
h.style.color="red"
})


//we can convert node list as well into an array 
const liList=document.getElementsByClassName('list') //we get the htmlCollection as a return type in this 
//forEach won't work here 

//convert nodelist  html collection to an array 
const listToArr=Array.from(liList) //now we have all the method of array are available with us 


//for Each 
listToArr.forEach((li)=>{
    li.style.color="orange"
    li.style.backgroundColor="red"
    li.style.padding="green"
    li.innerText="hello"
})




