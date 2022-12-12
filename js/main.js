// Main Varibles
let form = document.querySelector("form");
let userName = document.querySelector("[name='user-name']");
let userEmail = document.querySelector("[name='user-email']");
let userPass = document.querySelector("[name='user-pass']");
let userPassConfirm = document.querySelector("[name='user-pass-confirm']");
let showBtns = document.querySelectorAll(".show");
let link = document.querySelector(".link");

// Function To Handel Data
function sendData(e) {
  e.preventDefault();
  let active = document.querySelectorAll(".active");
  if (active.length === 4) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch("https://goldblv.com/api/hiring/tasks/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    window.location.href = "../login.html";
  }
}

function handelUserNameFunc() {
  let userNameRegX = /[a-z]+(\d+)?[a-z]/gi;
  if (
    userName.value.match(userNameRegX)[0] === userName.value &&
    userName.value.length >= 5 &&
    userName.value.length <= 15
  ) {
    HandelMarkRight(userName.parentElement.children[2]);
  } else {
    HandelMarkWrong(userName.parentElement.children[2]);
  }
}

function handelUserEmailFunc() {
  let userEmailRegX = /\w+@\w+.\w+/gi;
  if (userEmail.value.match(userEmailRegX)[0] === userEmail.value) {
    HandelMarkRight(userEmail.parentElement.children[2]);
    localStorage.setItem("email", userEmail.value);
  } else {
    HandelMarkWrong(userEmail.parentElement.children[2]);
  }
}

function handelUserPassFunc() {
  if (userPass.value.length >= 8) {
    HandelMarkRight(userPass.parentElement.children[2]);
  } else {
    HandelMarkWrong(userPass.parentElement.children[2]);
  }
}

function handelUserPassConfirmFunc() {
  if (userPassConfirm.value === userPass.value) {
    HandelMarkRight(userPassConfirm.parentElement.children[2]);
  } else {
    HandelMarkWrong(userPassConfirm.parentElement.children[2]);
  }
}

form.addEventListener("submit", sendData);
userName.addEventListener("input", handelUserNameFunc);
userEmail.addEventListener("input", handelUserEmailFunc);
userPass.addEventListener("input", handelUserPassFunc);
userPassConfirm.addEventListener("input", handelUserPassConfirmFunc);

showBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.parentElement.parentElement.children[1].type === "password") {
      e.target.parentElement.parentElement.children[1].type = "text";
    } else {
      e.target.parentElement.parentElement.children[1].type = "password";
    }
  });
});

function HandelMarkRight(ele) {
  ele.className = "fa-solid fa-circle-check green active";
}

function HandelMarkWrong(ele) {
  ele.className = "fa-solid fa-circle-xmark red";
}
