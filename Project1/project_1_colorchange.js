// const btn = document.querySelector('#grey');
// const btn1 = document.querySelector('#white');
// const btn2 = document.querySelector('#blue');
// const btn3 = document.querySelector('#yellow');

// function btnClick() {
//   const clr = document.querySelector('body');
//   clr.style.backgroundColor = 'grey';
// }

// function btn1Click() {
//   const clr = document.querySelector('body');
//   clr.style.backgroundColor = 'white';
// }

// function btn2Click() {
//   const clr = document.querySelector('body');
//   clr.style.backgroundColor = 'blue';
// }

// function btn3Click() {
//   const clr = document.querySelector('body');
//   clr.style.backgroundColor = 'yellow';
// }

//other way to solve it is using the event's

const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

//event listener, there is alot of events in browser clicking , moving pointer etc

btns.forEach(function (button) {
  //attach event listener on each of the button
  //we can listen to each of the events but for now
  //we will only listen for the click
  //whenever event occurs we should carry it   ourshelves,it is an object which has lot of things

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); //gives html span element
    if (e.target.id == 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});
