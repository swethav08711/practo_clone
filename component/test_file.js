window.addEventListener("load",()=>{
    fetchdata()
})
async function fetchdata(){
    let res = await fetch("http://localhost:1212/tests")
  let data = await res.json()
  console.log(data)

  localStorage.setItem("category", JSON.stringify(data))
    
  var data2 = JSON.parse(localStorage.getItem("category"))
    console.log(data2)

    var filter = document.getElementById("filter_side")

    // for(var i=0;i<data2.length;i++){
    //   var div =   document.createElement("div")
        
    //   div.style.display="flex"
    //   div.style.flexDirection="column"
    //   var p1 = document.createElement("p")
    //   p1.textContent = `${data2[i].pname}`
    //   var p2 = document.createElement("p")
    //   p2.textContent = `${data2[i].description}`
    //   var p3 = document.createElement("p")
    //   p3.textContent = `${data2[i].price}`
      
    //  div.append(p1,p2,p3) 
    //  filter.append(div)
    // }
    data2.forEach(({pname, description, price})=> {
      var div =   document.createElement("div")
        
      div.style.display="flex"
      div.style.flexDirection="column"
      var p1 = document.createElement("p")
      p1.textContent = `${pname}`
      var p2 = document.createElement("p")
      p2.textContent = `${description}`
      var p3 = document.createElement("p")
      p3.textContent = `${price}`
      let buttn2 = document.createElement("button")
        buttn2.textContent = "ADD"
        buttn2.addEventListener("click",()=>{
            addFav({ pname, description, price })
        }) 

     div.append(p1,p2,p3,buttn2) 
     filter.append(div)
    });
    
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

  let suma = document.getElementById("tot")

  suma.innerText = addi.length
}




