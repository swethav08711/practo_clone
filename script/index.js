import { footer, header, homebody } from "../component/export_files.js"
const footer_import = document.getElementById("footer_import")
footer_import.innerHTML = footer()
const header_import = document.getElementById("header_import")
header_import.innerHTML = header()

const body_import = document.getElementById("body_import")
body_import.innerHTML = homebody()
