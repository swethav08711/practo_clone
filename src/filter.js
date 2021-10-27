var min_app = document.getElementById("filter_side_container")
async function getdata() {
  let res = await fetch("http://localhost:1212/medicine?q=Fitness")
  let data = await res.json()
  console.log(data)
  append(data)
}
function append(d) {
  d.forEach(({ image, tablet, price }) => {
    let div = document.createElement("div")
    div.className = "filter_side_container1"
    div.addEventListener("click", discription_page)
    let img = document.createElement("img")

    img.src = image
    let p = document.createElement("p")
    p.innerText = tablet
    let pri = document.createElement("p")
    pri.className = "price_style_filter"
    pri.innerText = `${price}₹`
    let btn_div = document.createElement("div")
    btn_div.className = "button_contaner"
    let buttn1 = document.createElement("button")

    buttn1.textContent = "--"
    let buttn2 = document.createElement("button")

    buttn2.textContent = "ADD"
    btn_div.append(buttn1, buttn2)
    div.append(img, p, pri, btn_div)
    min_app.append(div)
  })
}
getdata()

function discription_page() {}
