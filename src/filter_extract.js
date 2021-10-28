var filter = document.getElementById("filter_side_container")

appendchild(JSON.parse(localStorage.getItem("category")))
function appendchild(d) {
  d.forEach(({ image, tablet, price }) => {
    let div = document.createElement("div")
    div.className = "filter_side_container1"

    let img = document.createElement("img")
    img.src = image
    let p = document.createElement("p")
    let t = tablet.split(" ")
    // console.log(t[0])
    t = t.length > 1 ? `${t[0] + " " + t[1]}` : tablet
    p.innerText = t

    let pri = document.createElement("p")
    pri.className = "price_style_filter"
    pri.innerText = `${price}₹`
    let btn_div = document.createElement("div")
    btn_div.className = "button_contaner"
    let buttn1 = document.createElement("button")
    buttn1.textContent = "--"
    let buttn2 = document.createElement("button")
    buttn2.textContent = "ADD"
    buttn2.onclick = function () {
      addFav({ image, tablet, price })
    }

    btn_div.append(buttn1, buttn2)
    div.append(img, p, pri, btn_div)
    filter.append(div)
  })
}
function addFav(d) {
  let addi = localStorage.getItem("cart") //is ther anything called cart obvious not at starting
  if (addi == null) {
    addi = []
  } else {
    addi = JSON.parse(addi) //JSON to object in the foem of array
    // for (var i = 0; i < addi.length; i++) {
    //   if (addi[i].id == d.id) {
    //     alert("Already in Cart")
    //     return
    //   }
    // }
  }
  addi.push(d)
  console.log(addi) //array of Objects
  localStorage.setItem("cart", JSON.stringify(addi))
  alert("Added to cart") //back to JSON from Object
  console.log(addi, d)
}
function viewcart() {
  window.location.href = "/pages/viewcart.html"
}
