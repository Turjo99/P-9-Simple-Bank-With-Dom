document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email");
  email = emailField.value;
  const passField = document.getElementById("password");
  password = passField.value;
  if (email == "turjo@user.com" && password == "123456") {
    window.location.href = "bank.html";
  } else alert("Invalid User");
});
