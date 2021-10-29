var append_mobile_number = document.getElementById("dom-placed-mobile-number")
var login_button = document.getElementById("after-otp-login-button")
var user_otp = document.getElementById("user-otp")
var otp_red_text = document.getElementsByClassName(
  "otp-field-cannot-be-empty"
)[0]

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
    console.log(response[response.length - 1].mobile_number)
  })
  .catch(function (error) {
    console.log(error)
  })

function handle_login_again() {
  if (user_otp.value == "") {
    otp_red_text.style.visibility = "visible"
  } else {
    window.location.assign("/pages/index.html")
  }
}
