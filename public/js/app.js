let nav =document.getElementById("nav")
let label =document.getElementById("label")
let labelfalse =document.getElementById("false")
label.addEventListener("click",()=>{
  nav.style.left="5vh"
  document.body.style.overflow="hidden"
  document.body.setAttribute("class","ag")
})

labelfalse.addEventListener("click",()=>{
    nav.style.left="-600vh"
    document.body.style.overflow="auto"
    document.body.setAttribute("class","")
  })