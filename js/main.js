let form = document.querySelector("form");
function sendData(e) {
  let userName = document.querySelector("[name='user-name']").value;
  let userEmail = document.querySelector("[name='user-email']").value;
  let userPass = document.querySelector("[name='user-pass']").value;
  let userPassConfirm = document.querySelector(
    "[name='user-pass-confirm']"
  ).value;
  let lock = false;
  let usernameRegX = /([a-z])+(\d*)?([a-z])/gi;
  let result = usernameRegX.test(userName);

  if (lock === false) {
    e.preventDefault();
    console.log(`lock: ${lock}`);
  } else {
  }
}
form.addEventListener("submit", sendData);
