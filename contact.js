function handleSubmit() {
  const message = document.getElementById("message");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const messageinput = document.getElementById("messageinput").value;

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

  if (/^\d{10}$/.test(phone) == false) {
    message.innerText = " mobile number must be 10 digit";
    message.style.display = "block";
    return false;
  }
  if (messageinput.length == 0) {
    message.innerText = "Type your querry in the message box";
    message.style.display = "block";
    return false;
  } else {
    alert("Message sent !");
    return false;
  }
}
