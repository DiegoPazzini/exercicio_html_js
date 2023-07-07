const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (ValA, ValB){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    let ValA = parseFloat(document.getElementById('valor-a').value);
    let ValB = parseFloat(document.getElementById('valor-b').value);

    const messagesucess = 'formulario enviado com sucesso! Verificando: <b> ValorA menor que ValorB!</B>';
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(ValA, ValB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
      
        ValA.value = '';
        ValB.value = '';

    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }    
})