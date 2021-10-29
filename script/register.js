var user_name = document.getElementById("user-name");
var mobile_number = document.getElementById("mobile-number");
var password = document.getElementById("user-password");
var send_otp_button = document.getElementById("send-otp-button");


var full_name_visibuility = document.getElementsByClassName("Full-Name-field-cannot-be-empty")[0];
var mobile_number_visibuility = document.getElementsByClassName("Mobile-Number-field-cannot-be-empty")[0];
var password_visibuility = document.getElementsByClassName("Password-field-cannot-be-empty")[0];

send_otp_button.addEventListener("click" , handle_otp_part);

function handle_otp_part(){
    full_name_visibuility.style.visibility = "hidden";
    mobile_number_visibuility.style.visibility = "hidden";
    password_visibuility.style.visibility = "hidden";
    if(user_name.value=="" || mobile_number.value=="" || password.value==""){
        if(user_name.value==""){
            full_name_visibuility.style.visibility = "visible";
            full_name_visibuility.style.marginBottom = "10px";
        }
        if(mobile_number.value==""){
            mobile_number_visibuility.style.visibility = "visible";
            mobile_number_visibuility.style.marginBottom = "10px";
        }
        if(password.value==""){
            password_visibuility.style.visibility = "visible";
            password_visibuility.style.marginBottom = "10px";
        }
       
    }
    else{
        var user_register_data = {
            "user_name": user_name.value,
            "mobile_number": mobile_number.value,
            "password":password.value
        }

        fetch("http://localhost:1212/register",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_register_data)
        })
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            console.log(response)
            window.location.assign("http://127.0.0.1:5500/pages/otp.html");
        })
        .catch(function(error){
            console.log(error)
        })
    }
}
