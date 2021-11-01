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
    img.src = ele.image
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
  addi.push(d)
  localStorage.setItem("cart", JSON.stringify(addi))
  alert("Added to cart")
  document.getElementById("tot").innerText = addi.length
}
let arr = JSON.parse(localStorage.getItem("cart"))
console.log(arr.length)
let lang = 0
if (arr == null || arr.length == 0) {
  lang = 0
} else {
  lang = arr.length
}
let sh = document.getElementById("tot")
sh.innerText = `${lang}`

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
