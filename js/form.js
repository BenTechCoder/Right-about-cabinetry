let phone = document.querySelector("#form-phone");
let email = document.querySelector("#form-email");
let formName = document.querySelector("#form-name")
let form = document.querySelector(".contact-form")

function formRequired() {
  if (phone.value.length > 0 || email.value.length > 0) {
    email.removeAttribute("required")
    phone.removeAttribute("required")
  }

}

let borderValidation = (id) => {
  if (id.value.trim() === "") {
    id.style.border = "2px solid red";
  } else {
    id.style.border = "2px solid green"
  }
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  borderValidation(email);
  borderValidation(phone);
  borderValidation(formName);
});