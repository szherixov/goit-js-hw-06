const formInput = document.querySelector(".login-form");

formInput.addEventListener("submit", sub);

function sub(event) {


  event.preventDefault();
  const {
    elements: { email, pass },
  } = event.currentTarget;


  if (pass.value === "" && email.value === "") {
    return;
  } else if (email.value === "") {
    alert ('все поля должны быть заполнены.');
  } else if (pass.value === "") {
    alert ('все поля должны быть заполнены.');
  }



  const formItems = {
    email: email.value,
    pass: pass.value,
  };


  if (email.value && pass.value) {
    console.log(formItems);
  }


  if (email.value && pass.value) {
    event.currentTarget.reset();
  }


}