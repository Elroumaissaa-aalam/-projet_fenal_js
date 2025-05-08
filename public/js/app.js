let nav =document.getElementById("nav")
let header =document.getElementById("header")
let label =document.getElementById("label")
let labelfalse =document.getElementById("false")
let body = document.body




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

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow="hidden"
}


span.onclick = function() {
  modal.style.display = "none";
    document.body.style.overflow="auto"
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



let modi = document.getElementById("modi")
let praesentium = document.getElementById("praesentium")
let pariatur = document.getElementById("pariatur")
let nostrum = document.getElementById("nostrum")
let lusti = document.getElementById("lusti")
let choose= document.getElementById("Choose1")
let ChooseList = [
   
    document.getElementById("Choose2"),
    document.getElementById("Choose3"),
    document.getElementById("Choose4"),
    document.getElementById("Choose5")
];


function hideAll() {
    ChooseList.forEach(el => el.style.display = "none")
}
 choose.style.display = "flex"

modi.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    choose.style.display = "flex"
});

praesentium.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[0].style.display = "flex"
     choose.style.display = "none"
});

pariatur.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[1].style.display = "flex"
});

nostrum.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[2].style.display = "flex"
});

lusti.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[3].style.display = "flex"
});
// part 6
let nextBtns = document.querySelectorAll(".next-btn")
let previousBtns = document.querySelectorAll(".previous-btn")
let containers = document.querySelectorAll(".carousel-container")

let slide = document.getElementById("slid")
let slide1 = document.getElementById("slid1")
let slide2 = document.getElementById("slid2")
let carouselIndexes = new Map()

            


nextBtns.forEach(btn => {


    btn.addEventListener("click", (e) => {

       

    
    let target = e.target.getAttribute("carousel-target") 
      
    let targetID = carouselIndexes.get(target) || 0 

    slider(targetID + 1, target)


      
        

    })
});

previousBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {

        let target = e.target.getAttribute("carousel-target")
 
        let targetID = carouselIndexes.get(target) || 0

        slider(targetID - 1, target)
    })
});



const slider = (index, target) => {


    containers.forEach(container => {
        if (container.id == target) {

            let camera = container.querySelector(".carousel")
            let slide = container.querySelectorAll(".slide")
            let slideWidth = slide[0].clientWidth

            if (index < 0) {
                index = slide.length - 1
            } else if (index >= slide.length) {
                index = 0
            }

            camera.style.transform = `translateX(-${slideWidth * index}px)`

            carouselIndexes.set(target, index)


        }
    });

}


containers.forEach(container => {


    if (container.getAttribute("autoslide")) {

        
        let targetID = carouselIndexes.get(container.id) || 0


        setInterval(() => {
            slider(targetID + 1, container.id)

        }, 5000);

    }
});
