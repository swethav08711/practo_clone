var data1 = JSON.parse(localStorage.getItem("patientData"))
var data2 = JSON.parse(localStorage.getItem("addressBook"))
var data3 = JSON.parse(localStorage.getItem("consultancy"))
var data4 = JSON.parse(localStorage.getItem("appointment"))
console.log(data1) //name
console.log(data2) //address
console.log(data3) //checkup name
console.log(data4)  //timing

var sname=document.getElementById("name")
var saddress = document.getElementById("address")
var stiming = document.getElementById("timeing")
var testName = document.getElementById("testName")

data1.forEach(ele => {
    var h2 = document.createElement("h2")
    h2.textContent = `${ele.name}`
    sname.append(h2)
});
var h1 = document.createElement("h1")
h1.textContent=`Timing: ${data4}`
stiming.append(h1)

data3.forEach(elem =>{
    var h3 = document.createElement("h3")
    h3.textContent = `${elem.tname}`
    var p = document.createElement("p")
    p.textContent = `PRICE :: ${elem.offerprice}`
    testName.append(h3,p)
})
data2.forEach(element=>{
    var p1 = document.createElement("p")
    p1.textContent=`${element.add1}`
    var p2 = document.createElement("p")
    p2.textContent=`${element.pincode}`
    var p3 = document.createElement("p")
    p3.textContent=` ${element.state}, India`
    var p4 = document.createElement("p")
    saddress.append(p1,p2,p3)
})
var homePage = document.getElementById("homepage")
homePage.addEventListener("click",()=>{
    window.location.href="/pages/index.html"
})