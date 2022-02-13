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
async function Searchdata() {
  const name = document.getElementById("input_search_value").value
  let res = await fetch(`http://localhost:1212/medicine?q=${name}`)
  let data = await res.json()
  return data
}
let main1 = document.getElementById("Search-bar_results")
function appendMovies(searchdata) {
  main1.style.display = "block"
  searchdata.forEach(ele => {
    let m = document.createElement("div")
    m.className = "search_container"
    let img = document.createElement("img")
    img.className = "search_img"
    img.src = imgarr[Math.floor(Math.random() * imgarr.length)]
    let p1 = document.createElement("p")
    p1.className = "text-charcoal-grey-two"
    let t = ele.tablet.split(" ")
    t = t.length > 1 ? `${t[0] + " " + t[1]}` : ele.tablet
    p1.innerText = t
    let div2 = document.createElement("div")
    div2.className = "first_div"
    let div1 = document.createElement("div")
    div1.className = "div2_style"
    let p2 = document.createElement("p")
    p2.className = "symbol1"
    p2.innerText = "₹"
    let p3 = document.createElement("p")
    p3.className = "price_style"
    p3.innerText = ele.price
    let p21 = document.createElement("p")
    p21.className = "symbol12"
    p21.innerText = "₹"
    let dis = document.createElement("p")
    dis.innerText = ele.price - Math.ceil((ele.discount / 100) * ele.price)
    dis.className = "dic_style"
    let p4 = document.createElement("p")
    p4.className = "disco_style"
    p4.innerText = ele.discount
    let p5 = document.createElement("div")
    p5.className = "symbol2"
    p5.innerText = "%off"
    let btn1 = document.createElement("button")
    btn1.innerText = "ADD"
    btn1.className = "adddingbtn"
    btn1.addEventListener("click", () => {
      addtofav(ele)
    })
    div1.append(p2, p3, p21, dis, p4, p5)
    div2.append(p1, div1)
    m.append(img, div2, btn1)
    main1.append(m)
  })
  main1.innerText("")
}
async function main(e) {
  e.stopPropagation()
  main1.innerHTML = null
  let medi = await Searchdata()
  appendMovies(medi)
}
window.addEventListener("click", () => {
  main1.style.display = "none"
})
// onclick on search add button

function addtofav(d) {
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
  //d.quantity = Number(document.getElementById(`${d.id}`).value)
  addi.push(d)
  localStorage.setItem("cart", JSON.stringify(addi))
  alert("Added to cart")
   main1.innerText("")
  document.getElementById("tot").innerText = addi.length
}
// let arr = JSON.parse(localStorage.getItem("cart"))
// console.log(arr.length)
// let lang = 0
// if (arr == null || arr.length == 0) {
//   lang = 0
// } else {
//   lang = arr.length
// }
// let sh = document.getElementById("tot")
// sh.innerText = `${lang}`

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

  pri.innerText = Math.ceil(ele.price + (ele.discount / 100) * ele.price)
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
  oriP.innerText = `₹ ${ele.price}`

  oriP.className = "dis_value"
  oriP.id = `${ele.id}+${ele.price}`

  let b1 = document.createElement("button")
  b1.setAttribute("type", "button")
  b1.addEventListener("click", () => decrement(ele))
  b1.className = "btn minus-btn disabled"
  b1.textContent = "-"

  let in1 = document.createElement("input")
  in1.setAttribute("value", 1)
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
  let a1 = arr.reduce((a, c) => a + c.price, 0)
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
// category
async function page1() {
  let res = await fetch("http://localhost:1212/medicine?q=Family")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "../pages/filter.html"
}
async function page2() {
  let res = await fetch("http://localhost:1212/medicine?q=Fitness")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "../pages/filter.html"
}
async function page3() {
  let res = await fetch("http://localhost:1212/medicine?q=Skin")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "../pages/filter.html"
}
async function page4() {
  let res = await fetch("http://localhost:1212/medicine?q=hair")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "../pages/filter.html"
}
async function page5() {
  let res = await fetch("http://localhost:1212/medicine?q=lip")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "../pages/filter.html"
}
async function page6() {
  let res = await fetch("http://localhost:1212/medicine?q=Sexual")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "../pages/filter.html"
}
async function page7() {
  let res = await fetch("http://localhost:1212/medicine?q=Women")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "../pages/filter.html"
}
async function page8() {
  let res = await fetch("http://localhost:1212/medicine?q=Baby")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "../pages/filter.html"
}
