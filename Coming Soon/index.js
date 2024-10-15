// Getting Elements
const button = document.getElementById('send-icon');
const error = document.querySelector('.error-i');
const errorMessage = document.getElementById('error');
const inputBorder = document.querySelector('.input-wrapper');
const input = document.querySelector('.maill'); 
console.log(input);

// Adding Event listeners

button.addEventListener('click', function(){

    if(input.value.includes('@') === true && input.value.includes('.com') === true){
       inputBorder.style.borderColor = 'green';
       input.value = '';
       errorMessage.style.display = 'none';
       error.style.display = 'none';
    } else if(input.value === ''|| input.value.includes('@') === false || input.value.includes('.com') === false){
        errorMessage.style.display = 'block';
        inputBorder.style.borderColor = 'red';
        error.style.display = 'inline';
    }
    }) 

