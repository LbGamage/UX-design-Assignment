//Lihini Start

//information form
const form= document.getElementById('main-form');
const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email');
const address = document.getElementById('address'); 
const city = document.getElementById('city');
const postcode = document.getElementById('postcode');
const state = document.getElementById('state');

//information form verification
form.addEventListener('submit', e => {
  //prevent submiting when errors are presnet
  e.preventDefault();

  if (validateInputs()) {
    //submit once all inputs are true
    window.location.href="Shipping-form.html"
  }})

  //form validation function 
function validateInputs(){
  //set validation to true- flag 
  let isValid = true;
  //get values
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const postcodeValue = postcode.value.trim();
  const stateValue = state.value;

//email format found on w3resources 
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 
  //first name validation 
  if(fNameValue ===''|| fNameValue.length < 2){
    setError(fName,'First Name is Required');
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(fNameValue)) {
    setError(fName,'Only enter letters');
    isValid = false;
  } else {
    setSuccess(fName);
  }

  //last name validation
  if(lNameValue ==='' || lNameValue.length <2){
    setError(lName,'Last Name is Required');
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(lNameValue)) {
    setError(lName,'Only enter letters');
    isValid = false;
  } else {
    setSuccess(lName);
  }

  //email validation
  
  if(emailValue ===''){
    setError(email,'Email is Required');
    isValid = false;
  } else if(!emailValue.match(emailFormat)){
    setError(email,'Email must be valid');
    isValid = false;
  }else {
    setSuccess(email);
  }

  //address validation
  if(addressValue ==='' || addressValue.length <5){
    setError(address,'Address is requried');
    isValid = false;
  } else {
    setSuccess(address);
  }

  //city validation
  if(cityValue ==='' || !/^[a-zA-Z]+$/.test(cityValue)){
    setError(city,'Please Enter City');
    isValid = false;
  } else {
    setSuccess(city);
  }
//postcode validation
  if(postcodeValue ==='' || postcodeValue.length <4 || postcodeValue.length >4){
    setError(postcode,'Please Enter Valid Postcode');
    isValid = false;
  } else {
    setSuccess(postcode);
  }

  if(stateValue ==="--"){
    setError(state,'Please Choose State/Territory');
    isValid= false;
  } else {
    setSuccess(state)
  }

  //return is valid (if true no erros are present)
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

//Lihini End

