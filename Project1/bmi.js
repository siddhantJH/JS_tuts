//we have to selected the entire form
//beacuase we have the submit button in there
//we will talk about the submit event and not the
//click event beacuse it is the form

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); //we get the string we must parse it to the int
  const weight = parseInt(document.querySelector('#weight').value); //we get the string we must parse it to the int

  //what is the difference between writing the height and weight here and height and weight outside is  we dont want to extract the value before submit we want to access it after the submit

  const results = document.querySelector('#results');
  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerText = `please give a valid height  ${height}`;
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerText = `please give a valid weight  ${weight}`;
  } else {
    results.innerText = `${(weight / ((height * height) / 10000)).toFixed(2)}`;
  }
});
