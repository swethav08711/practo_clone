var filter = document.getElementById("filter_side_container")

appendchild(JSON.parse(localStorage.getItem("category")))
function appendchild(d) {
  d.forEach(
    ({
      id,
      tablet,
      price,
      discount,
      highlights,
      discription,
      uses,
      benifits,
      direction,
      brand,
      image,
      category,
    }) => {
      let div = document.createElement("div")
      div.className = "filter_side_container1"
      div.addEventListener("click", function () {
        showdetails({
          id,
          tablet,
          price,
          discount,
          highlights,
          discription,
          uses,
          benifits,
          direction,
          brand,
          image,
          category,
        })
      })
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
      pri.innerText = price
      pri.id = `${id}+price`
      pri.className = "price_cart_cont"

      let div2 = document.createElement("div")
      div2.className = "quantity button_view_cont"

      let b1 = document.createElement("button")
      b1.setAttribute("type", "button")
      b1.addEventListener("click", e => decrement(id, price, e))
      b1.className = "btn minus-btn disabled"
      b1.textContent = "-"
      let in1 = document.createElement("input")
      in1.setAttribute("value", "1")
      in1.setAttribute("type", "text")
      in1.id = `${id}+quantity`
      let b2 = document.createElement("button")
      b2.setAttribute("type", "button")
      b2.addEventListener("click", e => increment(id, price, e))
      b2.setAttribute("type", "button")
      b2.className = "btn plus-btn"
      b2.textContent = "+"

      let buttn2 = document.createElement("button")
      buttn2.textContent = "ADD"
      buttn2.addEventListener("click", function (e) {
        addFav(
          {
            id,
            tablet,
            price,
            discount,
            highlights,
            discription,
            uses,
            benifits,
            direction,
            brand,
            image,
            category,
            quantity: Number(in1.value),
          },
          e
        )
      })
      div2.append(b1, in1, b2)
      btn_div.append(div2, buttn2)
      div.append(img, p, pri, btn_div)
      filter.append(div)
    }
  )
}
function increment(id, p, e) {
  e.stopPropagation()
  let inp = document.getElementById(`${id}+quantity`).value
  console.log(inp)
  let pri = document.getElementById(`${id}+price`).innerText
  let n1 = Number(pri) + p
  document.getElementById(`${id}+price`).innerText = n1
  document.getElementById(`${id}+quantity`).value = Number(inp) + 1
  sumprice()
}
function decrement(id, p, e) {
  e.stopPropagation()
  let inp = document.getElementById(`${id}+quantity`).value
  if (inp > 1) {
    let pri = document.getElementById(`${id}+price`).innerText
    let n1 = Number(pri) - p
    document.getElementById(`${id}+price`).innerText = n1
    document.getElementById(`${id}+quantity`).value = Number(inp) - 1
    sumprice()
  }
}
function sumprice() {
  let suma = document.getElementById("sum_amou")
  let totnum = document.getElementById("tot_num")
  let data = JSON.parse(localStorage.getItem("cart"))
  totnum.innerText = `My cart: ${data.length} items`
  let sum = 0
  for (let i = 0; i < data.length; i++) {
    sum += Number(data[i].price) * Number(data[i].quantity)
  }
  suma.innerHTML = null
  suma.append("Payable Aount: ₹", sum)
}
function addFav(d, e) {
  e.stopPropagation()

  let addi = localStorage.getItem("cart") //is ther anything called cart obvious not at starting
  if (addi == null) {
    addi = []
  } else {
    addi = JSON.parse(addi)
  }
  // d.quantity = 1
  addi.push(d)
  localStorage.setItem("cart", JSON.stringify(addi))
  alert("Added to cart")
  // console.log(addi, d)
  let suma = document.getElementById("tot")
  suma.innerText = addi.length
}
sumprice()
function viewcart() {
  window.location.href = "/pages/viewcart.html"
}
function showdetails(det) {
  let detail = localStorage.getItem("detail")
  if (detail == null) {
    detail = []
  } else {
    detail = JSON.parse(detail)
  }
  detail.push(det)
  localStorage.setItem("detail", JSON.stringify(detail))
  window.location.href = "/pages/product_detail.html"
}
