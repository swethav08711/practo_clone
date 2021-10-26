import { footer, header } from "../component/export_files.js"

const footer_import = document.getElementById("footer_import")
footer_import.innerHTML = footer()

const header_import = document.getElementById("header_import")
header_import.innerHTML = header()
