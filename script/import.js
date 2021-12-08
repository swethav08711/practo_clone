import { footer, header, searchfield } from "../component/export"
const footer_import = document.getElementById("footer_import")
footer_import.innerHTML = footer()
const header_import = document.getElementById("header_import")
header_import.innerHTML = header()
const searchfield_import = document.getElementById("searchfield_import")
searchfield_import.innerHTML = searchfield()

let dataq = JSON.parse(localStorage.getItem("cart"))
document.getElementById("tot").innerText = dataq.length
