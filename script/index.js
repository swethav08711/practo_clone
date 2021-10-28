import { footer, header, homebody } from "../component/export_files.js"
const footer_import = document.getElementById("footer_import")
footer_import.innerHTML = footer()
const header_import = document.getElementById("header_import")
header_import.innerHTML = header()

const body_import = document.getElementById("body_import")
body_import.innerHTML = homebody()

//slideshow
var slideIndex = 0
showSlides()

function showSlides() {
  var i
  var slides = document.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("dot")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
  setTimeout(showSlides, 2000) // Change image every 2 seconds
}
