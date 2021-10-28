var box = false
let results = document.getElementById("Search-bar_results")
var extra_div = document.getElementById("Search-bar_results")
async function fetchdata() {
  const name = document.getElementById("input_search_value").value
  let res = await fetch(`http://localhost:1212/medicine?q=${name}`)
  let data = await res.json()
  console.log(data)
  return data
}

function appendMovies(movies) {
  box = true
  results.style.display = "block"
  movies.forEach(({ tablet, image, price, discount }) => {
    let main_div = document.createElement("div")
    main_div.className = "main_div_style"
    let div = document.createElement("div")
    div.className = "small_div"
    let img = document.createElement("img")
    img.className = "search_img"
    img.src = image
    let div2 = document.createElement("div")
    div2.className = "div2_style"
    let p = document.createElement("p")
    p.className = "text-charcoal-grey-two"

    let t = tablet.split(" ")
    // console.log(t[0])
    t = t.length > 1 ? `${t[0] + " " + t[1]}` : tablet
    p.innerText = t
    let pri = document.createElement("p")
    pri.className = "price_style"
    pri.innerText = `${price}₹`
    let dis = document.createElement("p")
    dis.className = "disco_style"
    dis.innerText = `${discount}% off`
    let btn = document.createElement("button")
    btn.className = "btn_style"
    btn.textContent = "ADD"
    btn.onclick = function () {
      addFav({ image, tablet, price })
    }
    div2.append(p, pri, dis)
    div.append(img, div2, btn)
    main_div.append(div)
    extra_div.append(main_div)
  })
}

async function main(e) {
  e.stopPropagation()
  console.log(e)
  extra_div.innerHTML = null
  let medi = await fetchdata()
  appendMovies(medi)
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

window.addEventListener("click", () => {
  box && (results.style.display = "none")
})

async function page1() {
  let res = await fetch("http://localhost:1212/medicine?q=Fitness")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "/pages/filter_page.html"
}
async function page2() {
  let res = await fetch("http://localhost:1212/medicine?q=skin")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "/pages/filter_page.html"
}
async function page3() {
  let res = await fetch("http://localhost:1212/medicine?q=family")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "/pages/filter_page.html"
}
async function page4() {
  let res = await fetch("http://localhost:1212/medicine?q=hair")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "/pages/filter_page.html"
}
async function page5() {
  let res = await fetch("http://localhost:1212/medicine?q=lip")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "/pages/filter_page.html"
}
async function page6() {
  let res = await fetch("http://localhost:1212/medicine?q=women")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))

  window.location.href = "/pages/filter_page.html"
}
