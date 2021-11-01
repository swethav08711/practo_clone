window.addEventListener("load",()=>{
    fetchdata1()
    fetchdata2()
})
async function fetchdata1(){
    let res = await fetch("http://localhost:1212/tests")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))
    
  var data2 = JSON.parse(localStorage.getItem("category"))
    console.log(data2)

    var filter = document.getElementById("filter_side")

    data2.forEach(({pname, description, price})=> {
      var arrange = document.createElement("div")
      var div =   document.createElement("div")
      div.style.display="flex"
      div.style.flexDirection="column"
      var p1 = document.createElement("h5")
      p1.textContent = `${pname}`
      var p2 = document.createElement("p")
      p2.textContent = `${description}`
      var p3 = document.createElement("p")
      p3.textContent = `₹${price}`
      let buttn2 = document.createElement("button")
        buttn2.textContent = "ADD"
        buttn2.addEventListener("click",()=>{
            addFav({ pname, description, price })
        }) 
    
     div.append(p1,p2,p3,buttn2) 
     arrange.append(div)
     filter.append(arrange)
    });
    
}


function addFav(d) {
  let addi = localStorage.getItem("cart") //is ther anything called cart obvious not at starting
  if (addi == null) {
    addi = []
  } else {
    addi = JSON.parse(addi) 
  }
  addi.push(d)
  console.log(addi) //array of Objects
  localStorage.setItem("cart", JSON.stringify(addi))
  alert("Added to cart") //back to JSON from Object
  console.log(addi, d)

  let suma = document.getElementById("tot")

  suma.innerText = addi.length
}

async function fetchdata2(){
  let res = await fetch("http://localhost:1212/consultance")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("consult", JSON.stringify(data))
    
  var data3 = JSON.parse(localStorage.getItem("consult"))
  console.log(data3)

  var checkups= document.getElementById("checkups")

  data3.forEach(({image,tname,ntests,offerprice,originalprice})=>{
    var div1 = document.createElement("div")

    var img = document.createElement("img")
    img.src=`${image}`
    var h3 = document.createElement("h3")
    h3.textContent=`${tname}`
    var p1 = document.createElement("p")
    p1.innerText=`${ntests}`
    var div2 = document.createElement("div")
    div2.style.display="flex"
    div2.style.gap="10px"
    div2.style.padding="20px"
    div2.style.fontSize="20px"
    var p2 = document.createElement("p")
    p2.textContent=`₹ ${offerprice}`
    var p3 = document.createElement("p")
    p3.textContent=`₹ ${originalprice}`
    p3.style.textDecorationLine="line-through"
    // var p4 =document.createElement("p")
    // p4.textContent=`((${originalprice}-${offerprice})/${originalprice})*100`
    // p4.style.color="green"
    var btn = document.createElement("button")
    btn.textContent="Book Now"
    btn.addEventListener("click",()=>{
        bookSection({image,tname,offerprice})
    })
    div2.append(p2,p3,btn)
    div1.append(img,h3,p1,div2)
    checkups.append(div1)
  })
}

function bookSection(d){
  let addElement = localStorage.getItem("consultancy") //is ther anything called consultancy obvious not at starting
  if (addElement == null) {
    addElement = []
  } else {
    addElement = JSON.parse(addElement) 
  }
  addElement.push(d)
  console.log(addElement) //array of Objects
  localStorage.setItem("consultancy", JSON.stringify(addElement))
  alert("Conttinue to next page") //back to JSON from Object
}



