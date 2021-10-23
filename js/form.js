let phone = document.querySelector("#form-phone");
let email = document.querySelector("#form-email");

function formRequired() {
  if (phone.value.length > 0 || email.value.length > 0) {
    email.removeAttribute("required")
    phone.removeAttribute("required")
  }

}
