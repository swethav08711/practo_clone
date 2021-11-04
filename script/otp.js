var append_mobile_number = document.getElementById("dom-placed-mobile-number")
var login_button = document.getElementById("after-otp-login-button")
var user_otp = document.getElementById("user-otp")
var otp_red_text = document.getElementsByClassName(
  "otp-field-cannot-be-empty"
)[0]

let otp = Math.floor(1000 + Math.random() * 9000);
setTimeout(function () {
  alert(`Your OTP is ${otp}`)
}, 2000)

login_button.addEventListener("click", handle_login_again)

fetch("http://localhost:1212/register")
  .then(function (response) {
    return response.json()
  })
  .then(function (response) {
    append_mobile_number.innerHTML = `+91${
      response[response.length - 1].mobile_number
    }`
    append_mobile_number.style.visibility = "visible"
  })
  .catch(function (error) {
    console.log(error)
  })

function handle_login_again() {
  otp_red_text.innerHTML = "OTP field cannot be empty"
  if (user_otp.value == "") {
    otp_red_text.style.visibility = "visible"
  } else {
    if (user_otp.value == otp) {
      fetch("http://localhost:1212/register")
        .then(function (response) {
          return response.json()
        })
        .then(function (response) {
          var user_register_data_to_loginData = {
            user_name: response[response.length - 1].user_name,
            mobile_number: response[response.length - 1].mobile_number,
            password: response[response.length - 1].password,
          }

          console.log(user_register_data_to_loginData)

          fetch("http://localhost:1212/loginData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user_register_data_to_loginData),
          })
            .then(function (response) {
              return response.json()
            })
            .then(function (response) {
              window.location.assign("http://127.0.0.1:5500/pages/index.html")
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      otp_red_text.innerHTML = "Incorrect OTP"
      otp_red_text.style.visibility = "visible"
    }
  }
}
