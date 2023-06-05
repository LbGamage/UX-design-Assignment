

//payemnt form
const paymentForm = document.getElementById('form2');
const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const expiryDate = document.getElementById('expiry-date');
const cvc = document.getElementById('cvc');


paymentForm.addEventListener('submit', e => {
    //prevent submiting when errors are presnet
    e.preventDefault();
  
    if (validatePayment()) {
        //submit once all inputs are true
        window.location.href="confirmation.html"
    }})
  
  
  //form validation function 
  function validatePayment(){
    //set validation to true- flag 
    let isValid = true;
    //get values
    const cardValue = cardNumber.value.trim();
    const cardNameValue = cardName.value.trim();
    const expiryValue = expiryDate.value.trim();
    const cvcValue = cvc.value.trim();
  
    if(cardNameValue ===''|| cardNameValue.length < 2){
      setError(cardName,'Name on Card is Required');
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(cardNameValue)) {
      setError(cardName,'Only enter letters');
      isValid = false;
    } else {
      setSuccess(cardName);
    }

    if(cardValue ===''|| cardValue.length !== 12 || !/^[0-9]+$/.test(cardValue)){
        setError(cardNumber,'Please Enter Numbers on Card');
        isValid = false;
      } else {
        setSuccess(cardNumber);
      }

    const todayDate = new Date();

    if (expiryValue===''|| new Date(expiryValue+'-01') < todayDate){
        setError (expiryDate, 'Date not valid or Card has Expired');
        isValid = false;
    } else{
        setSuccess(expiryDate);
    }

    if(cvcValue ===''|| cvcValue.length !== 3 || !/^[0-9]+$/.test(cvcValue)){
        setError(cvc,'Please Enter Numbers on Card');
        isValid = false;
      } else {
        setSuccess(cvc);
      }

    return isValid;
  
  }
  
  //function to apply error css and show message
  function setError (input, message) {
    const formInputBox = input.parentElement;
    const errorDisplay = formInputBox.querySelector('small');
  
    errorDisplay.innerText = message;
    
    formInputBox.className = 'form-inputbox error-border';
  }
  
  //function for no erros
  function setSuccess(input, message){
    const formInputBox = input.parentElement;
    formInputBox.className = 'form-inputbox';
  }
  
  function orderSummary(){
    var orderContent = document.getElementById('orderSummary');
    var orderArrow = document.querySelector('.order-arrow');
    if (orderContent.style.display === "none"){
      orderContent.style.display = "block";
      orderArrow.classList.add('rotate');
    } else{
      orderContent.style.display ="none";
      orderArrow.classList.remove('rotate');
    }
  };