//now our task is jitne bhi li hai mai isme click karu aur image gayab 
//ho jae 



document.querySelector("#images").addEventListener('click',function(){
    console.log(e.target)   //it will prin the target kis target se event occur ho raha hai
    console.log(e.target.parentNode) //we get the parent ie we want to remove the li and not the 
    //image other wise the li will remaain there 
    let removeit=e.target.parentNode  //we get the li element entirely and not just the image
   removeit.parentNode.removeChile(removeit)
},false)



