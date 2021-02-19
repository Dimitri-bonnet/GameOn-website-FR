function editNav() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelector(".close");
const form_registration = document.getElementById("registration")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal event
modalCross.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Input form event
formData.forEach((inputForm) => inputForm.addEventListener("input", dateInput));

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");


function dateInput(){
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value); 
}
//Valid form
form_registration.addEventListener('submit', validForm)

 function validForm (event){
    
  event.preventDefault();
  console.log("ici")
} 

