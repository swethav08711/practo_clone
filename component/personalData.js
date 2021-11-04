

var submit  = document.getElementById("submit")
var pData = []
submit.addEventListener("click",()=>{
var pname = document.getElementById("p-name").value
var dob = document.getElementById("dob").value
var mobile = document.getElementById("mobile").value
var email = document.getElementById("email").value
   var data = {
       name : pname,
       date : dob,
       phone : mobile,
       email : email
   }
   pData.push(data)
   console.log(pData)
   if(pname ==="" || dob==="" || mobile==="" || email===""){
        alert("fill all data")
   }
   else{
    localStorage.setItem("patientData", JSON.stringify(pData))
    window.location.href="/pages/address.html" 
    pname=""
    dob=""
    mobile=""
    email=""
   }
   
})

var cart = document.getElementById("display-item")

let cdata = JSON.parse(localStorage.getItem("consultancy"))
cdata.forEach(ele => {
    cart.innerHTML = null
     console.log(ele.tname)
    var div= document.createElement("div")

    var div1 = document.createElement("div")
    div1.style.display="flex"
    div1.style.gap = "30px"
    var p1= document.createElement("h3")
    p1.textContent = `Test: ${ele.tname}`
    var p2= document.createElement("p")
    p2.style.marginTop="20px"
    p2.textContent = `₹ ${ele.offerprice}`
    div1.append(p1,p2)

    p3= document.createElement('h5')
    p3.textContent = `Preparation`
    p4= document.createElement('p')
    p4.style.margin = "0"
    p4.textContent = `No specefic preparation required for ${ele.tname}`
    p5= document.createElement('h3')
    p5.textContent = `By Practo Labs`

    div.append(div1,p3,p4,p5)

    var div2 = document.createElement("div")
    div2.style.display= "flex"
    div2.style.gap = "20px"
    var input = document.createElement('input')
    input.className="input-cart"
    input.placeholder = 'Enter Coupon Code'
    var btn = document.createElement('button')
    btn.className = "btn-check"
    btn.textContent = "check"
    div2.append(input,btn)
    var div3 = document.createElement('div')
    var p6 = document.createElement('h5')
    p6.textContent = `Total`
    p6.style.float="left"
    p6.style.margin= "70px"
    p6.style.fontSize = "25px"
    var p7 = document.createElement('p')
    p7.textContent=`₹ ${ele.offerprice}`
    p7.style.float="right"
    p7.style.margin= "70px"
    p7.style.fontSize = "25px"
    div3.append(p6,p7)
    btn.addEventListener("click",()=>{
        if(input.value == "MASAI100"){
            p7.textContent=`₹ ${ele.offerprice -100}`
        }
        else{
            alert("Invalid coupon")
            p7.textContent=`₹ ${ele.offerprice}`
        }
    })
    
    

    cart.append(div,div2,div3)
});