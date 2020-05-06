import "../css/style.css";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email validility
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid.");
  }
}

// get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check required
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required.`);
    } else {
      showSuccess(input);
    }
  });
}

// function check validity
function checkLenght(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters long.`
    );
  } else if (input.value.lenght > max) {
    showError(
      input,
      `${getFieldName(input)} must be less then ${max} characters long.`
    );
  } else {
    showSuccess(input);
  }
}

// check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match.");
  }
}

// event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLenght(username, 3, 15);
  checkLenght(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
