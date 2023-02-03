const signinButton = document.querySelector("#signin");
const signupButton = document.querySelector("#signup");

signinButton.addEventListener("click", signinButtonClick, false);
signupButton.addEventListener("click", signupButtonClick, false);

async function signinButtonClick(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const data = {
    username,
    password
  }
  const response = await fetch("/user/signin", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log(result);
}



async function signupButtonClick(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const data = {
    username,
    password
  }
  const response = await fetch("/user/signup", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log(result);
}