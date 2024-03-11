//now our task is jitne bhi li hai mai isme click karu aur image gayab 
//ho jae 



//first select the entire ul with the class name and attach it  to the event listener
document.querySelector("#images").addEventListener('click',function(){
    console.log(e.target)   //it will print the target kis target se event occur ho raha hai
    console.log(e.target.parentNode) //sometimes we deal with the parent like here we want to remove the li and not just the image
    //other wise image remove ho jaegi but li wahi rahegi which is not correct (it give taget ka parent node )

    // //how to remove the li (approach 1)
    // let removeit = e.target.parentNode
    // removeit.remove()


    //approach 2
    // let removeit = e.target.parentNode
    // removeit.parentNode.removeChild(removeit) //parent choose karo fir uska parent choose karo fir ul mil jaega fir remove child lagake ham li remove
    //karenge 

    //now if we try to click google every thing get removed  why?
    //this is because if you have clicked on image than it will work fine 
    //but if you will click on the li than uska parent is ul and all list item get removed 
    //so we need to analyze it , so put it inside the if block 


    //we need to look at other attribute
    if(e.target.tagName)
    {
        let removeit = e.target.parentNode
        removeit.parentNode.removeChild(removeit)
    }
},false)



