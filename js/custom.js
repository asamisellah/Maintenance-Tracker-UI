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
let signup = document.getElementById("signup_form");
if (signup) {
  signup.addEventListener("submit", function(e) {
    e.preventDefault();
    data = {
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      confirm_password: document.getElementById("confirm_password").value
    };
    fetch(
      "https://andela-maintenance-tracker-api.herokuapp.com/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
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
}

// Login user
let login = document.getElementById("login_form");
if (login) {
  login.addEventListener("submit", function(e) {
    e.preventDefault();
    data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    };
    fetch(
      "https://andela-maintenance-tracker-api.herokuapp.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.message === "Sign in Successful!") {
          // Check if browser supports local storage
          if (typeof Storage != "undefined") {
            // Store token
            localStorage.setItem("token", data.token);
          }
          window.location.href = "../pages/user_make_request.html";
        } else {
          document.getElementById("message").innerHTML = data.message;
          document.getElementById("message").style.color = "red";
          document.getElementById("message").style.fontSize = "1.3rem";
        }
      })
      .catch(error => console.error("Error:", error));
  });
}

const token = localStorage.getItem("token");

// Create Request
let create_request = document.getElementById("request_form");
if (create_request) {
  create_request.addEventListener("submit", function(e) {
    e.preventDefault();
    let data = {
      title: document.getElementById("title").value,
      _type: document.getElementById("type").value,
      description: document.getElementById("description").value,
      category: document.getElementById("category").value,
      area: document.getElementById("area").value
    };
    fetch(
      "https://andela-maintenance-tracker-api.herokuapp.com/api/v1/users/requests",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.message === "Request Created Successfully") {
          window.location.href = "../pages/user_all_requests.html";
          console.log("Bearer " + token);
        } else {
          document.getElementById("message").innerHTML = data.message;
          document.getElementById("message").style.color = "red";
          document.getElementById("message").style.fontSize = "1.3rem";
        }
      })
      .catch(error => console.error("Error:", error));
  });
}
