const clock = document.querySelector('#clock');

//to get a date we do this
let date = new Date();

//to get a date we use a method , but this
//shows the updated time only during the refresh of the screen but we want to see the time
//continuously so for that we need something that run continously

// setInterval() //it says give me a method and a duration intervals on which you want me to call the programme

//first parameter is function and second parameter is the time in millisecond
setInterval(function () {
  clock.innerText = date.toLocaleTimeString();
}, 1000);
