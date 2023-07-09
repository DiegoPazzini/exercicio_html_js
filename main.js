const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (ValA, ValB){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    let ValA = parseFloat(document.getElementById('valor-a').value);
    let ValB = parseFloat(document.getElementById('valor-b').value);
    
    formValid = numbervalid(ValA, ValB);
    
    if (formValid){
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        
        ValA.value = '';
        ValB.value = '';

    } else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }    
})
