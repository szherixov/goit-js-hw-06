const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);
function formSubmit(event) {

  event.preventDefault();


  const {
    elements: { email, password },
  } = event.currentTarget;


  if (password.value === "" && email.value === "") {
    return;
  } else if (email.value === "") {
    alert`Все поля должны быть заполнены`;
  } else if (password.value === "") {
    alert`Все поля должны быть заполнены`;
  }


  const formItems = {
    email: email.value,
    password: password.value,
  };


  if (email.value && password.value) {
    console.log(formItems);
  }


  if (email.value && password.value) {
    event.currentTarget.reset();
  }
}