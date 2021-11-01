let detail1 = JSON.parse(localStorage.getItem("detail"))
console.log(detail1)

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
                  src="//www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png"
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
