window.addEventListener("load",()=>{
    fetchdata()
})

async function fetchdata(){
    let res = await fetch("http://localhost:1212/consultance")
    let data = await res.json()
    console.log(data)
}