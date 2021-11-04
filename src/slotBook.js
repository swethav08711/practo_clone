window.addEventListener("load", () => {
  fetchData1()
})
function fetchData1() {
  let data = JSON.parse(localStorage.getItem("patientData"))
  let data1 = JSON.parse(localStorage.getItem("consultancy"))
  console.log(data1)
  console.log(data)
  let pDetails = document.getElementById("p-details")
  data.forEach(elem => {
    pDetails.innerHTML = null
    var div = document.createElement("div")
    // console.log(elem.name)
    var p1 = document.createElement("p")
    p1.textContent = `Name: ${elem.name}`
    var p2 = document.createElement("p")
    p2.textContent = `Phone: ${elem.phone}`
    var p3 = document.createElement("p")
    p3.textContent = `DOB: ${elem.date}`
    div.append(p1, p2, p3)
    pDetails.append(div)
  })
}

var addTime = []

var bookTime = document.getElementById("bookTime")

var div2 = document.createElement("div")
var div3 = document.createElement("div")
var div4 = document.createElement("div")
var div5 = document.createElement("div")
var btn1 = document.createElement("button")
btn1.textContent = "9:00 am -10:00 am"
var btn2 = document.createElement("button")
btn2.textContent = "10:00 am - 11:00 am"
var btn3 = document.createElement("button")
btn3.textContent = "11:00 - 12:00 pm"
var btn4 = document.createElement("button")
btn4.textContent = "3:00 pm -4:00 pm"
var btn5 = document.createElement("button")
btn5.textContent = "4:00 pm - 5:00 pm"
var btn6 = document.createElement("button")
btn6.textContent = "5:00 pm - 6:00 pm"
var btn7 = document.createElement("button")
btn7.textContent = "6:00 pm - 7:00 pm"
var btn8 = document.createElement("button")
btn8.textContent = "7:00 pm - 8:00 pm"
var btn9 = document.createElement("button")
btn9.textContent = "Emargency"

div2.append(btn1, btn2, btn3)
div3.append(btn4, btn5, btn6)
div4.append(btn7, btn8)
div5.append(btn9)
bookTime.append(div2, div3, div4, div5)

btn1.addEventListener("click", () => {
  addTime.push("09:00 to 10:00", Date())
  console.log(addTime[addTime.length - 2])
  localStorage.setItem(
    "appointment",
    JSON.stringify(addTime[addTime.length - 2])
  )
})
btn2.addEventListener("click", () => {
  addTime.push("10:00 to 11:00", Date())
  console.log(addTime[addTime.length - 2])
  localStorage.setItem(
    "appointment",
    JSON.stringify(addTime[addTime.length - 2])
  )
})
btn3.addEventListener("click", () => {
  addTime.push("11:00 to 12:00", Date())
  console.log(addTime)
  console.log(addTime[addTime.length - 2])
  localStorage.setItem(
    "appointment",
    JSON.stringify(addTime[addTime.length - 2])
  )
})
btn4.addEventListener("click", () => {
  addTime.push("3:00 - 4:00 ", Date())
  console.log(addTime)
  console.log(addTime[addTime.length - 2])
  localStorage.setItem(
    "appointment",
    JSON.stringify(addTime[addTime.length - 2])
  )
})

//date
// var dateDisp = document.getElementById("dateDisp")

// var dbtn1 = document.createElement("button")
// dbtn1.textContent=new Date()
// console.log(d1)
// var dbtn2 = document.createElement("button")
// var dbtn3 = document.createElement("button")
// var dbtn4 = document.createElement("button")

var cart = document.getElementById("display-item")
let cdata = JSON.parse(localStorage.getItem("consultancy"))
cdata.forEach(ele => {
  cart.innerHTML = null
  console.log(ele.tname)
  var div = document.createElement("div")

  var div1 = document.createElement("div")
  div1.style.display = "flex"
  div1.style.gap = "30px"
  var p1 = document.createElement("h3")
  p1.textContent = `Test: ${ele.tname}`
  var p2 = document.createElement("p")
  p2.style.marginTop = "20px"
  p2.textContent = `₹ ${ele.offerprice}`
  div1.append(p1, p2)

  p3 = document.createElement("h5")
  p3.textContent = `Preparation`
  p4 = document.createElement("p")
  p4.style.margin = "0"
  p4.textContent = `No specefic preparation required for ${ele.tname}`
  p5 = document.createElement("h3")
  p5.textContent = `By Practo Labs`

  div.append(div1, p3, p4, p5)

  var div2 = document.createElement("div")
  div2.style.display = "flex"
  div2.style.gap = "20px"
  var input = document.createElement("input")
  input.className = "input-cart"
  input.placeholder = "Enter Coupon Code"
  var btn = document.createElement("button")
  btn.className = "btn-check"
  btn.textContent = "check"
  div2.append(input, btn)
  var div3 = document.createElement("div")
  var p6 = document.createElement("h5")
  p6.textContent = `Total`
  p6.style.float = "left"
  p6.style.margin = "51px"
  p6.style.fontSize = "25px"
  var p7 = document.createElement("p")
  p7.textContent = `₹ ${ele.offerprice}`
  p7.style.float = "right"
  p7.style.margin = "45px"
  p7.style.fontSize = "25px"
  div3.append(p6, p7)
  btn.addEventListener("click", () => {
    if (input.value == "MASAI100") {
      p7.textContent = `₹ ${ele.offerprice - 100}`
    } else {
      alert("Invalid coupon")
      p7.textContent = `₹ ${ele.offerprice}`
    }
  })

  cart.append(div, div2, div3)
})

var cont = document.getElementById("continue")
cont.addEventListener("click", () => {
  window.location.href = "/pages/paymentSlot.html"
})
