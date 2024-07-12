function handleSubmit() {
  const message = document.getElementById("message");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  message.style.display = "none";

  if (name.length == 0) {
    message.innerText = "Please Enter your Name";
    message.style.display = "block";
    return false;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
    message.innerText = "Please Enter a valid email";
    message.style.display = "block";
    return false;
  }

  if (password.length == 0) {
    message.innerText = "Please Enter password";
    message.style.display = "block";
    return false;
  }

  if (password.length < 8) {
    message.innerText = "Password must be greater than 8 characters";
    message.style.display = "block";
    return false;
  } else {
    alert("REGISTERED !!");
    return false;
  }
}
