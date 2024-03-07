const bg=document.querySelector(".root")
const liList=document.querySelectorAll("li")
bg.style.backgroundColor="black"
liList.forEach((h)=>[
    h.style.color="white"
])

function addNew(element){
const newText=document.createTextNode(`${element}`)
const newli=document.createElement('li')
newli.setAttribute("style","color:white")
newli.appendChild(newText)
document.querySelector('ul').appendChild(newli)
}
addNew('Flat')
addNew('Trip to Europe')
// addNew('Trip to japan')
addNew('Get Married ')



function AddElement()
{
const element=document.querySelector('.enterItem')
const t=element.value
addNew(t)
}