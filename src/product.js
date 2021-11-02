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
let detail1 = JSON.parse(localStorage.getItem("detail"))
console.log(detail1)
let imag = imgarr[Math.floor(Math.random() * imgarr.length)]
detail1.forEach(ele => {
  document.getElementById(
    "cont"
  ).innerHTML = ` <container class="u-content-wrapper">
      <div class="right-container" id="fir">
        <div class="image-carousel--wrapper">
          <div class="image-carousel--slide_wrapper"></div>
          <div class="image-carousel--product_wrapper">
            <div class="image-carousel--image_wrapper">
              <div>
                <img
                  src='${imag}'
                  alt=""
                  class="image-carousel--default-image"
                />
              </div>
            </div>
            <div class="image-carousel--product_divide"></div>
            <div>
              <div class="u-d-flex u-margin--10 u-m-l--20" id="m1">
                <span class="text-charcoal-grey heading-beta-bold">
                  <span>₹${ele.price}</span>
     
                  <span>${ele.discount}%off</span>
                </span>
              </div>
            </div>
            <div class=".u-p--15 u-disable-scroll--x">
              <button
                class="button button__primary button__normal--fixed-height" id="a1"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="u-columns u-seven">
        <div class="u-p-t--20">
          <div class="heading-alpha u-p-b--5 u-d-flex">
            <h1 class="heading-alpha">${ele.tablet}</h1>
          </div>
          <div class="u-m-t--5">
            <span class="text-cool-grey-three u-m-r--10">Manufacture</span>
            <span class="u-m-r--10 u-text--no-decoration"
              >${ele.brand}</span
            >
          </div>
          <div class="health-product__section">
            <div class="list_wrapper">
              <h2 class="heading-gamma-bold text-charcoal-grey">Highlights</h2>
              <h3 class="list__description heading-epsilon text-steel"></h3>
              <ul class="heading-epsilon text-charcoal-grey">
                <li class="list__without-image-content">
                 ${ele.highlights}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="health-product__section">
              <div class="text-charcoal-grey u-p-b--10 heading-gamma-bold">
                Description
              </div>
              <h2 class="heading-epsilon u-p-b--10">
                ${ele.discription}
              </h2>
            </div>
            <div class="health-product__section">
              <div class="text-charcoal-grey u-p-b--10 heading-gamma-bold">
                Uses
              </div>
              <h2 class="heading-epsilon u-p-b--10">
               ${ele.uses}
              </h2>
            </div>
            <div class="health-product__section">
              <div class="text-charcoal-grey u-p-b--10 heading-gamma-bold">
                How to use
              </div>
              <h2 class="heading-epsilon u-p-b--10">
               ${ele.direction}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </container>`
  document.getElementById("a1").onclick = function () {
    fav(ele)
  }
})

function fav(d) {
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

  addi.push(d)
  localStorage.setItem("cart", JSON.stringify(addi))
  alert("Added to cart")
  document.getElementById("tot").innerText = addi.length
}
