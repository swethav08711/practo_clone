var imgarr = [
  "https://www.practostatic.com/practopedia-v2-images/res-150/3546844420aad2f7c8c30d6031e2f8860c0b2b1a1.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/82a76f0c1541a288d5589e6f929e52a8230888f31.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/dade7c4be55ca640cee635636a9d320fabb5cf281.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/a833e0e88a5b07008f26299313dbbf28951222091.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/f894c491e3081c24f4ebda8734dc937d3c5c78021.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/33bf2e821a6c0a9d5dc52fc2a825f2cd5002b8da1.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/fb7895145c8d9162013b2815fcaad7a98528bef21.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/81e239043d17b14bfd4c4d0c899e2b855b1e44af1.JPG",
  "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
  "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
  "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
  "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
  "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
  "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
  "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
  "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
  "https://www.practostatic.com/practopedia-v2-images/res-150/dade7c4be55ca640cee635636a9d320fabb5cf281.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/a833e0e88a5b07008f26299313dbbf28951222091.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/f894c491e3081c24f4ebda8734dc937d3c5c78021.JPG",
  "https://www.practostatic.com/practopedia-v2-images/res-150/33bf2e821a6c0a9d5dc52fc2a825f2cd5002b8da1.JPG",
]
var filter = document.getElementById("filter_side_container")
var h2tit = document.getElementById("he_title")
appendchild(JSON.parse(localStorage.getItem("category")))
function appendchild(d) {
  d.forEach(ele => {
    let div = document.createElement("div")
    div.className = "filter_side_container1"
    div.addEventListener("click", function () {
      showdetails(ele)
    })
    let h = ele.category.split(" ")
    h = h.length > 1 ? `${h[0] + " " + h[1]}` : ele.category
    document.getElementById("he_title").innerText = h
    let img = document.createElement("img")
    img.src = imgarr[Math.floor(Math.random() * imgarr.length)]
    //discount
    let dis = document.createElement("p")
    dis.className = "dis_style_filter1"
    dis.innerText = `${ele.discount}%off`
    //
    //original price
    let ori = document.createElement("p")
    ori.className = "oriclass"
    ori.innerText = `₹${ele.price}`
    //
    let diva = document.createElement("div")
    diva.className = "diva"

    let p = document.createElement("p")
    p.className = "myname"
    let t = ele.tablet.split(" ")
    t = t.length > 1 ? `${t[0] + " " + t[1]}` : ele.tablet
    p.innerText = t
    //
    let origin = document.createElement("p")
    origin.className = "symbol_style_filter strike_thriugh"
    origin.textContent = "₹"
    //

    let btn_div = document.createElement("div")
    btn_div.className = "button_contaner"
    let pri = document.createElement("p")
    pri.innerText = `₹${ele.price}`
    pri.id = `${ele.id}+${ele.price}`
    pri.className = "price_cart_cont1"

    let div2 = document.createElement("div")
    div2.className = "quantity button_view_cont"
    let oriP = document.createElement("p")
    oriP.innerText = Math.ceil(ele.price - (ele.discount / 100) * ele.price)
    oriP.className = "dis_value1"
    oriP.id = `${ele.id}+${ele.price}`
    let b1 = document.createElement("button")
    b1.setAttribute("type", "button")
    b1.addEventListener("click", e => decrement(ele, e))
    b1.className = "btn minus-btn disabled"
    b1.textContent = "-"
    let in1 = document.createElement("input")
    in1.setAttribute("value", "1")
    in1.setAttribute("type", "text")
    in1.id = `${ele.id}`
    let b2 = document.createElement("button")
    b2.setAttribute("type", "button")
    b2.addEventListener("click", e => increment(ele, e))
    b2.setAttribute("type", "button")
    b2.className = "btn plus-btn"
    b2.textContent = "+"

    let buttn2 = document.createElement("button")
    buttn2.textContent = "ADD"
    buttn2.addEventListener("click", function (e) {
      addFav(ele, e)
    })
    div2.append(b1, in1, b2)
    diva.append(origin, oriP, pri, dis)
    btn_div.append(div2, buttn2)
    div.append(img, p, diva, btn_div)
    filter.append(div)
  })
}
function increment(ele, e) {
  e.stopPropagation()
  let inp = document.getElementById(`${ele.id}`).value
  let pri = document.getElementById(`${ele.id}+${ele.price}`).innerText

  let n1 = Number(pri) + Number(ele.price)

  document.getElementById(`${ele.id}+${ele.price}`).innerText = n1
  document.getElementById(`${ele.id}`).value = Number(inp) + 1
  console.log(inp)
  console.log(n1)
}
function decrement(ele, e) {
  e.stopPropagation()
  let inp = document.getElementById(`${ele.id}`).value

  if (inp > 1) {
    let pri = document.getElementById(`${ele.id}+${ele.price}`).innerText
    let n1 = Number(pri) - Number(ele.price)
    document.getElementById(`${ele.id}+${ele.price}`).innerText = n1
    document.getElementById(`${ele.id}`).value = Number(inp) - 1
    console.log(inp)
    console.log(n1)
  }
}

// showdetail
function showdetails(det) {
  console.log("helllo")
  let detail = localStorage.getItem("detail")
  if (detail == null) {
    detail = []
  } else {
    detail = JSON.parse(detail)
  }
  detail.push(det)
  localStorage.setItem("detail", JSON.stringify(detail))
  console.log(detail)
  window.location.href = "../pages/product_detail.html"
}
function addFav(d, e) {
  e.stopPropagation()
  console.log("hello")
  let addi = localStorage.getItem("cart")
  if (addi == null) {
    addi = []
  } else {
    addi = JSON.parse(addi)
    for (var i = 0; i < addi.length; i++) {
      if (addi[i].id == d.id) {
        alert("Already in Cart")
        return
      }
    }
  }

  d.quantity = Number(document.getElementById(`${d.id}`).value)
  addi.push(d)
  localStorage.setItem("cart", JSON.stringify(addi))
  alert("Added to cart")
  document.getElementById("tot").innerText = addi.length
}

// let d1 = JSON.parse(localStorage.getItem("cart"))
// console.log(d1.length)
// let swe = document.getElementById("tot")
// console.log(swe)
