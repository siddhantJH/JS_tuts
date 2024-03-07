//parent child relations
//child child relations
//add element and remove element 



//refer two,html 
//open live server
//select parent elment and see what all element you get
const parent=document.querySelector('.parent')
console.log(parent) //we will get a entire parent tag html elmeent
//how to get a children of the parent 
console.log(parent.children) //we get html collection
//since it is array like we can use the indexing [] 
console.log(parent.children[1].innerHtml) //we get html of the tue 


//although it is not completely array so we can't us forEach
//so we can us normal for loop
for(let i =0;i<parent.children.length;i++)
{
    //console log it 
    parent.children[i].innerHtml;
}
//we can do styling as well
parent.children[i].style.color="green"


//how to get the firstElementChild
parent.firstElementChild //we get the entire montday child
parent.lastElementChild //we get the last elemnet 



//to move from child to parent 
const dayOne=document.querySelector('.day')
//to get the parent 
console.log(dayOne.parent) //we get the  entire parent element tag 
console.log(dayONe.nextElementSibling) //we get the parent 
console.log("NODES:",parent.childNodes); //it gives us nodelist and chod node 
//every line break will be considered as a node 
//comments as well 
//dom is tree structure 
//all are node 










