const form = document.querySelector('form');
//this usecase will give you empty
//  const height = parseInt(document.querySelector('height').value);

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = `Please give a Valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a Valid weight ${weight}`;
    }
    else {
       const bmi = (weight / ((height*height)/10000)).toFixed(2);
        let bmiMessage = '';

    
    if (bmi < 18.6) {
        bmiMessage = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        bmiMessage = 'Normal Range';
    } else {
        bmiMessage = 'Overweight';
    }

    // Show the result and BMI message
    results.innerHTML = `<span>${bmi}</span> (${bmiMessage})`;
}

})


