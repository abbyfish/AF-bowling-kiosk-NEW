if( document.querySelector('.counter') ){

  const form = document.querySelector('.counter');
  const btnPlus = document.querySelector('.count .increase');
  const btnMinus = document.querySelector('.count .decrease');
  // const btnCart = document.querySelector('.cart button');
  const qty = form.querySelector('input');
  const quantity = document.querySelector('.qty span');
  let count = 0;

  // initial form state
  form.reset();
  btnMinus.disabled = true;
  // btnCart.disabled = true;
  
  const updateDisplay = function(){
    qty.value = count;
    quantity.textContent = count;
    checkButtonState();
  }
  
  const checkButtonState = function(){
    if(count === 0){
      btnMinus.disabled = true;
      btnPlus.disabled = false;
      // btnCart.disabled = true;
    } else if(count === 10) {
      btnMinus.disabled = false;
      btnPlus.disabled = true;
      // btnCart.disabled = false;
    } else {
      btnMinus.disabled = false;
      btnPlus.disabled = false;
      // btnCart.disabled = false;
    }
  }
  
  btnPlus.addEventListener('click',function(e){
    e.preventDefault();
    if(count<15){
      count++;
      updateDisplay();
    }
  })
  
  btnMinus.addEventListener('click',function(e){
    e.preventDefault();
    if(count>0){
      count--;
      updateDisplay();
    }
  })

  // btnCart.addEventListener('click',function(e){
  //   e.preventDefault();
  //   location.href = 'your-page.html';
  // })
  
  
}


if( document.querySelector('.submit-names') ){

  const form = document.querySelector('.submit-names');
  const nameField = form.querySelector('.submit-names input');
  const btnSubmit = form.querySelector('.submit-names button');

  // initial form state
  form.reset();
  btnSubmit.disabled = true;

  btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    location.href = 'your-page.html';
  })
  
  const stateHandle = function() {
    if(nameField.value === '') {
      btnSubmit.disabled = true;
    } else {
      btnSubmit.disabled = false;
    }
  }
  
  form.addEventListener('change',stateHandle);
  
}

