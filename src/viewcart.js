let parent = document.getElementById("data")

let data = JSON.parse(localStorage.getItem("cart"))
//console.log(data)
data.forEach(ele => {
  let div = document.createElement("div")
  div.className = "boxing_cart_container"
  div.id = ele.id
  let img = document.createElement("img")
  img.className = "img_cart"
  img.src = ele.image
  //
  let maindiv = document.createElement("div")
  maindiv.className = "main_div_filter"
  let diva = document.createElement("div")
  diva.className = "diva1"
  let origin = document.createElement("p")
  origin.className = "symbol_style_filter"
  origin.textContent = "₹"
  let pri = document.createElement("p")
  pri.innerText =
    Math.ceil(ele.price + (ele.discount / 100) * ele.price) * ele.quantity
  pri.id = `${ele.id}+${ele.price}`
  pri.className = "price_cart_cont"

  let dis = document.createElement("p")
  dis.className = "dis_style_filter"
  dis.innerText = `${ele.discount}%off`
  //
  let p = document.createElement("p")
  p.className = "cart_name_para"
  let t = ele.tablet.split(" ")
  t = t.length > 1 ? `${t[0] + " " + t[1]}` : ele.tablet
  p.innerText = t

  let div1 = document.createElement("div")
  div1.className = "div1_cart_cont"

  let div2 = document.createElement("div")
  div2.className = "quantity button_view_cont"

  let oriP = document.createElement("p")
  oriP.innerText = `₹ ${ele.price * ele.quantity}`

  oriP.className = "dis_value"
  oriP.id = `${ele.id}+${ele.price}`

  let b1 = document.createElement("button")
  b1.setAttribute("type", "button")
  b1.addEventListener("click", () => decrement(ele))
  b1.className = "btn minus-btn disabled"
  b1.textContent = "-"

  let in1 = document.createElement("input")
  in1.setAttribute("value", ele.quantity)
  in1.setAttribute("type", "text")
  in1.id = `input${ele.id}`

  let b2 = document.createElement("button")
  b2.addEventListener("click", () => increment(ele))
  b2.setAttribute("type", "button")
  b2.className = "btn plus-btn"
  b2.textContent = "+"

  let dele = document.createElement("button")
  dele.innerText = "X"
  dele.className = "delete_button"

  dele.addEventListener("click", () => {
    delet(ele.id)
  })

  div2.append(b1, in1, b2)
  diva.append(oriP, origin, pri, dis)
  div1.append(div2, div2)
  maindiv.append(diva, div1)
  div.append(img, p, maindiv, dele)
  parent.append(div)
})
function increment(ele) {
  let inp = document.getElementById(`input${ele.id}`).value
  //console.log(inp, ele.id)
  let pri = document
    .getElementById(`${ele.id}+${ele.price}`)
    .innerText.split(" ")[1]

  let n1 = Number(pri) + Number(ele.price)
  document.getElementById(`${ele.id}+${ele.price}`).innerText = `₹ ${n1}`
  document.getElementById(`input${ele.id}`).value = Number(inp) + 1
  //console.log(inp)
  //console.log(n1)
  sumprice()
}
function decrement(ele) {
  console.log("hello", ele)
  let inp = document.getElementById(`input${ele.id}`).value

  if (inp > 1) {
    let pri = document
      .getElementById(`${ele.id}+${ele.price}`)
      .innerText.split(" ")[1]
    let n1 = Number(pri) - Number(ele.price)
    document.getElementById(`${ele.id}+${ele.price}`).innerText = `₹ ${n1}`
    document.getElementById(`input${ele.id}`).value = Number(inp) - 1
    //console.log(inp)
    // console.log(n1)
    sumprice()
  }
}
function sumprice() {
  let suma = document.getElementById("sum_amou")
  let totnum = document.getElementById("tot_num")
  let arr = JSON.parse(localStorage.getItem("cart"))
  totnum.innerText = `My cart: ${arr.length} items`
  let a1 = arr.reduce((a, c) => a + c.price * c.quantity, 0)
  suma.innerText = `Payable Amount: ₹${a1}`
  console.log(a1)
  let addi = localStorage.getItem("sum")
  if (addi == null) {
    addi = []
  } else {
    addi = JSON.parse(addi)
  }
  addi.push(a1)
  localStorage.setItem("sum", JSON.stringify(addi))
}
sumprice()

function delet(e) {
  //console.log(e)
  let iddiv = document.getElementById(e)
  console.log(iddiv)
  let items = JSON.parse(localStorage.getItem("cart"))
  items = items.filter(b => {
    return e !== b.id
  })
  iddiv.parentNode.removeChild(iddiv)
  console.log(items)
  localStorage.setItem("cart", JSON.stringify(items))
  sumprice()
}
// let suma = document.getElementById("sum_amou")
// let arr = JSON.parse(localStorage.getItem("cart"))
// let a1 = arr.reduce((a, c) => a + c.price * c.quantity, 0)
// suma.textContent = a1
// console.log(a1)
