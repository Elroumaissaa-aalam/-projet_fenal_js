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

let all=document.getElementById("all")
let starters=document.getElementById("starters")
let salads=document.getElementById("salad")
let special=document.getElementById("special")
let lawal=document.getElementById("lawal")
let tani=document.getElementById("tani")
let talate=document.getElementById("talate")
let raba3e=document.getElementById("raba3e")
let lkamasel=document.getElementById("lkamase")
let sadase=document.getElementById("sadase")
let sab3a=document.getElementById("sab3a")
let tamane=document.getElementById("tamane")
let tasa3e=document.getElementById("tasa3e")
all.addEventListener("click",()=>{
   if ( all.style.color="#CDA45E") {
      starters.style.color="#d0cecc"
        salads.style.color="#d0cecc"
         special.style.color="#d0cecc"
   }
    lawal.style.display="block"
    tani.style.display="block"
    talate.style.display="block"
    raba3e.style.display="block"
    lkamasel.style.display="block"
    sadase.style.display="block"
    sab3a.style.display="block"
    tamane.style.display="block"
    tasa3e.style.display="block"
})
starters.addEventListener("click",()=>{
    
    if (  starters.style.color="#CDA45E" ) {
      all.style.color="#d0cecc"
          salads.style.color="#d0cecc"
           special.style.color="#d0cecc"
     }
    lawal.style.display="block"
    tani.style.display="block"
    talate.style.display="none"
    raba3e.style.display="none"
    lkamasel.style.display="none"
    sadase.style.display="none"
    sab3a.style.display="none"
    tamane.style.display="block"
    tasa3e.style.display="none"
})
salads.addEventListener("click",()=>{
    if (  salads.style.color="#CDA45E" ) {
        all.style.color="#d0cecc"
            starters.style.color="#d0cecc"
             special.style.color="#d0cecc"
       }
    lawal.style.display="none"
    tani.style.display="none"
    talate.style.display="none"
    raba3e.style.display="block"
    lkamasel.style.display="none"
    sadase.style.display="none"
    sab3a.style.display="none"
    tamane.style.display="block"
    tasa3e.style.display="block"
})
special.addEventListener("click",()=>{
    if (  special.style.color="#CDA45E" ) {
        all.style.color="#d0cecc"
            salads.style.color="#d0cecc"
             starters.style.color="#d0cecc"
       }
   
    lawal.style.display="none"
    tani.style.display="none"
    talate.style.display="block"
    raba3e.style.display="none"
    lkamasel.style.display="block"
    sadase.style.display="block"
    sab3a.style.display="none"
    tamane.style.display="none"
    tasa3e.style.display="none"
})