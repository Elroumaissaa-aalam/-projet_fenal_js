let nav =document.getElementById("nav")
let header =document.getElementById("header")
let label =document.getElementById("label")
let labelfalse =document.getElementById("false")
let body = document.body
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

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
//  window.addEventListener("scrollend",()=>{
 
//         if (header.style.position="fixed") {
//             header.style.top=0
//             header.style.backgroundColor="black"
//         }
  
//  })


btn.onclick = function() {
  modal.style.display = "block";
   document.body.style.overflow="hidden"
}

span.onclick = function() {
  modal.style.display = "none";
    document.body.style.overflow="auto"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}