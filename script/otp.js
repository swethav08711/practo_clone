var append_mobile_number = document.getElementById("dom-placed-mobile-number");
var login_button =document.getElementById("after-otp-login-button");
var user_otp = document.getElementById("user-otp");
var otp_red_text = document.getElementsByClassName("otp-field-cannot-be-empty")[0];

let otp = Math.floor(100000 + Math.random() * 900000);
setTimeout(function() { 
    alert(`Your OTP is ${otp}`); 
}, 2000);

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
    otp_red_text.innerHTML = "OTP field cannot be empty"
    if(user_otp.value == ""){
        otp_red_text.style.visibility = "visible"
    }
    else{
        if(user_otp.value == otp){
            window.location.assign("https://www.practo.com/");
        }
        else{
            otp_red_text.innerHTML = "Incorrect OTP"
            otp_red_text.style.visibility = "visible"
        }
    }
    
}