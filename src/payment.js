document.getElementById("1").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("img")
  img.src = "../images/pro1.PNG"
  parent.innerHTML = null
  parent.append(img)
})
document.getElementById("2").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("img")
  img.src = "../images/pro2.PNG"
  parent.innerHTML = null
  parent.append(img)
})
document.getElementById("3").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("img")
  img.src = "../images/pro3.PNG"
  parent.innerHTML = null
  parent.append(img)
})
document.getElementById("4").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("img")
  img.src = "../images/pro4.PNG"
  parent.innerHTML = null
  parent.append(img)
})
document.getElementById("5").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("img")
  img.src = "../images/pro5.PNG"
  parent.innerHTML = null
  parent.append(img)
})
document.getElementById("6").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("img")
  img.src = "../images/pro6.PNG"
  parent.innerHTML = null
  parent.append(img)
})
document.getElementById("7").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("img")
  img.src = "../images/pro7.PNG"
  parent.innerHTML = null
  parent.append(img)
})
document.getElementById("8").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let h3 = document.createElement("h3")
  h3.textContent = "Pay On Delivery"
  h3.className = "h3_class"
  let inp = document.createElement("input")
  inp.setAttribute("type", "radio")
  inp.className = "inp_class"
  let p = document.createElement("p")
  p.textContent =
    "Pay digitally with SMS Pay Link. Cash may not be accepted in COVID restricted areas."
  p.className = "p_class"
  let btn = document.createElement("button")
  btn.className = "btn_class"
  btn.textContent = "Pay"
  btn.addEventListener("click", () => {
    window.location.href = "../pages/sucess.html"
  })
  parent.innerHTML = null
  parent.append(h3, inp, p, btn)
})
document.getElementById("9").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("img")
  img.src = "../images/pro8.PNG"
  parent.innerHTML = null
  parent.append(img)
})

let data1 = JSON.parse(localStorage.getItem("sum"))
let swe = document.getElementById("sum_amount")
swe.innerHTML = null
swe.innerText = data1[data1.length - 1]
