var login_button = document.getElementById("login-button");
var login_mobile_number = document.getElementById("login-mobile-number");
var login_password = document.getElementById("password");
var mobile_number_visibuility = document.getElementsByClassName("Mobile-Number-field-cannot-be-empty")[0];
var password_visibuility = document.getElementsByClassName("Password-field-cannot-be-empty")[0];
var password_label = document.getElementById("password-label");


login_button.addEventListener("click" , handle_login);

function handle_login(){

    
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

        var mobile_flag = 0;
        var password_flag = 0;
        var both_not_found = 0;

    
        fetch("http://localhost:1212/register")
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                for(index in response){
                    if(response[index].mobile_number == login_mobile_number.value || response[index].password == login_password.value){
                        both_not_found++
                        if(response[index].mobile_number == login_mobile_number.value && response[index].password == login_password.value){
                            window.location.assign("https://www.practo.com/");
                        }
                        else{
                            if(response[index].mobile_number !== login_mobile_number.value){
                                mobile_flag++
                            }
                            else if(response[index].password !== login_password.value){
                                password_flag++
                            }
                        }
                        
                    }
                      
                }

                
            
                console.log("m" , mobile_flag , password_flag);
                if(both_not_found == 0){
                    mobile_number_visibuility.textContent = "Mobile Number is not registered";
                    mobile_number_visibuility.style.visibility = "visible";
                }
                else{
                    if(mobile_flag !==0 && password_flag !==0){
                        mobile_number_visibuility.textContent = "Mobile Number is not registered";
                        mobile_number_visibuility.style.visibility = "visible";
                    }
                    else if(mobile_flag>0){
                        mobile_number_visibuility.textContent = "Mobile Number is not registered";
                        mobile_number_visibuility.style.visibility = "visible";
                    }
                    
                    else if(password_flag>0){
                        password_visibuility.textContent = "Incorrect password";
                        password_visibuility.style.visibility = "visible";

                    }
                }
              
             
               
                console.log( mobile_flag , "p" ,password_flag);
            })
            .catch(function(error){
                console.log(error)
            })
            
    }


         
}

