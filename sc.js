let open = document.querySelector(".click-nav")
let close = document.querySelector(".click-nav-2")
let list = document.querySelector(".main-nav-2")
let main = document.querySelector(".main-nav")
let svgOpen = document.querySelector(".click-nav svg")
let svgOut = document.querySelector(".click-nav-2 svg")

open.addEventListener("click", function(){
list.style.display = `flex`
main.style.display = `none`
})
close.addEventListener("click" , function(){
 list.style.display = `none`
 main.style.display = `flex`
})
svgOpen.addEventListener("mouseover", function(){
svgOpen.style.fill = `orange`
})
svgOpen.addEventListener("mouseout", function(){
svgOpen.style.fill = `white`
})
svgOut.addEventListener("mouseover", function(){
svgOut.style.fill = `orange`
})
svgOut.addEventListener("mouseout", function(){
svgOut.style.fill = `white`
})