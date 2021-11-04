// window.addEventListener("load",()=>{
//     check()
// })
// function check(){
//     var data = JSON.parse(localStorage.getItem("addressBook"))
//     console.log(data)
//     var addr = document.getElementById("address")
//     var addr2 = document.getElementById("addressDisplay")
//     if(data===null){
//         addr2.style.display = "none"
//         addr.style.display = "block"
//     }
//     else{
//         yourAddress()
//         addr.style.display="none"
//     }
// }
var submit  = document.getElementById("submit")
var addressBook=[]
submit.addEventListener("click",()=>{
    var add1 = document.getElementById("addl1").value
    var add2 = document.getElementById("addl2").value
    var add3 = document.getElementById("addl3").value
    var pincode = document.getElementById("pincode").value
    var state = document.getElementById("state").value
    var phone = document.getElementById("phone").value

    var aBook = {
        add1 : add1,
        add2 : add2,
        add3 : add3,
        pincode : pincode,
        state : state,
        phone : phone  
    }
    addressBook.push(aBook)
    if(add1 ==="" || pincode === "" || state==="" || phone===""){
        alert("Fill all Data")
    }
    else{
        localStorage.setItem("addressBook", JSON.stringify(addressBook))
        window.location.href="/pages/appointment.html"
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
