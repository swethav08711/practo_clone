var login_button = document.getElementById("login-button");
var login_mobile_number = document.getElementById("login-mobile-number");
var login_password = document.getElementById("password");
var mobile_number_visibuility = document.getElementsByClassName("Mobile-Number-field-cannot-be-empty")[0];
var password_visibuility = document.getElementsByClassName("Password-field-cannot-be-empty")[0];
var password_label = document.getElementById("password-label");

login_button.addEventListener("click" , handle_login);

function handle_login(){

    var mobile_flag = false;
    var password_flag = false;
    
    mobile_number_visibuility.style.visibility = "hidden";
    password_visibuility.style.visibility = "hidden";
    if(login_mobile_number.value == "" || login_password.value == ""){
        if(login_mobile_number.value == ""){
            mobile_number_visibuility.style.visibility = "visible";
            password_label.style.marginTop = "25px";
        }
        if(login_password.value == ""){
            password_visibuility.style.visibility = "visible";
        }
    }
    else{
    
        fetch("http://localhost:1212/register")
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                for(index in response){
                    if(response[index].mobile_number == login_mobile_number.value || response[index].password == login_password.value){
                        if(response[index].mobile_number == login_mobile_number.value && response[index].password == login_password.value){
                            window.location.assign("https://www.practo.com/")
                        }
                        else if(response[index].mobile_number == login_mobile_number.value){
                            mobile_flag = true;
                        }
                        else{
                            password_flag = true;
                        }
                    }
                      
                }

            })
            .catch(function(error){
                console.log(error)
            })
    }
    console.log(mobile_flag , password_flag);
}
    login_mobile_number.value = "";
    login_password.value = "";
