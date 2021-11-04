document.getElementById("1").addEventListener("click", () => {
  let parent = document.querySelector(".img_div")
  let img = document.createElement("div")
  img.innerHTML = `<div class="form-container">
    <div class="field-container">
      <label for="name">Name</label>
      <input id="name" maxlength="20" type="text" />
    </div>
    <div class="field-container">
      <label for="cardnumber">Card Number</label
      ><span id="generatecard">generate random</span>
      <input
        id="cardnumber"
        type="text"
        pattern="[0-9]*"
        inputmode="numeric"
      />
      <svg
        id="ccicon"
        class="ccicon"
        width="750"
        height="471"
        viewBox="0 0 750 471"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      ></svg>
    </div>
    <div class="field-container">
      <label for="expirationdate">Expiration (mm/yy)</label>
      <input
        id="expirationdate"
        type="text"
        pattern="[0-9]*"
        inputmode="numeric"
      />
    </div>
    <div class="field-container">
      <label for="securitycode">Security Code</label>
      <input
        id="securitycode"
        type="text"
        pattern="[0-9]*"
        inputmode="numeric"
      />
    </div>
  </div>`
  let btn = document.createElement("button")
  btn.className = "btn_classa"
  btn.textContent = "Pay"
  btn.addEventListener("click", () => {
    location_su()
  })
  parent.innerHTML = null
  parent.append(img, btn)
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
    location_su()
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

let data1 = JSON.parse(localStorage.getItem("consultancy"))
let swe = document.getElementById("sum_amount")
swe.innerHTML = null
swe.innerText = data1[data1.length - 1].offerprice

function location_su() {
  JSON.parse(localStorage.getItem("cart"))
  localStorage.removeItem("cart")
  window.location.href = "/pages/slotEnd.html"
}
