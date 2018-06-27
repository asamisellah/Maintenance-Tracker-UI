function disableButton() {
  document.getElementById("approve").classList.add("disabled");
  document.getElementById("reject").classList.add("disabled");

  document.getElementById("resolve").classList.remove("disabled");
}

function enableButton() {
  document.getElementById("approve").classList.remove("disabled");
  document.getElementById("reject").classList.remove("disabled");

  document.getElementById("resolve").classList.add("disabled");
}

function rejectButton() {
  document.getElementById("approve").classList.add("disabled");
  document.getElementById("resolve").classList.add("disabled");

  document.getElementById("reject").classList.remove("disabled");
}

// Fetch API

// SignUp user
document.getElementById("signup_form").addEventListener("submit", function(e) {
  e.preventDefault();
  data = {
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    confirm_password: document.getElementById("confirm_password").value
  };
  fetch("http://localhost:5000/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      if (data.message === "Sign Up Successful") {
        window.location.href = "../pages/signin.html";
      } else {
        document.getElementById("message").innerHTML = data.message;
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.fontSize = "1.3rem";
      }
    })
    .catch(error => console.error("Error:", error));
});
