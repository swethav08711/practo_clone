var append_mobile_number = document.getElementById("dom-placed-mobile-number");
var login_button =document.getElementById("after-otp-login-button");

login_button.addEventListener("click" , handle_login_again);



fetch("http://localhost:1212/register")
.then(function(response){
    return response.json()
})
.then(function(response){
    append_mobile_number.innerHTML = `+91${response[response.length-1].mobile_number}`
    append_mobile_number.style.visibility = "visible"
    console.log(response[response.length-1].mobile_number)
})
.catch(function(error){
    console.log(error)
})


function handle_login_again(){
    window.location.assign("https://www.practo.com/");
}
