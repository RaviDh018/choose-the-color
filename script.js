let main = document.querySelector("#main")
let a = document.querySelector("#box1")
let b = document.querySelector("#box2")
let c = document.querySelector("#box3")
let d = document.querySelector("#box4")
let e = document.querySelectorAll(".box")
let h1 = document.querySelector("h1")

a.addEventListener("click", function(){
  main.style.backgroundColor = "#40ff40"
  a.style.backgroundColor = "white"
  b.style.backgroundColor = "#ff5cb3"
  c.style.backgroundColor = "#45fcfd"
  d.style.backgroundColor = "yellow"
  h1.style.color = "#0031ff"
})
b.addEventListener("click", function(){
  main.style.backgroundColor = "#ff5cb3"
  a.style.backgroundColor = "#40ff40"
  b.style.backgroundColor = "white"
  c.style.backgroundColor = "#45fcfd"
  d.style.backgroundColor = "yellow"
  h1.style.color = "rgb(175 42 231)"
})
c.addEventListener("click", function(){
  main.style.backgroundColor = "#45fcfd"
  a.style.backgroundColor = "#40ff40"
  b.style.backgroundColor = "#ff5cb3"
  c.style.backgroundColor = "white"
  d.style.backgroundColor = "yellow"
  h1.style.color = "rgb(231 42 42)"
})
d.addEventListener("click", function(){
  main.style.backgroundColor = "yellow"
  a.style.backgroundColor = "#40ff40"
  b.style.backgroundColor = "#ff5cb3"
  c.style.backgroundColor = "#45fcfd"
  d.style.backgroundColor = "white"
  h1.style.color = "rgb(145 1 175)"
})
// e.addEventListener("dblclick", function(){
//   main.style.backgroundColor = "white"
//   a.style.backgroundColor = "#40ff40"
//   b.style.backgroundColor = "#ff5cb3"
//   c.style.backgroundColor = "#45fcfd"
//   d.style.backgroundColor = "yellow"
// })
a.addEventListener("dblclick", function(){
  main.style.backgroundColor = "white"
  a.style.backgroundColor = "#40ff40"
  b.style.backgroundColor = "#ff5cb3"
  c.style.backgroundColor = "#45fcfd"
  d.style.backgroundColor = "yellow"
  h1.style.color = "black"
})
b.addEventListener("dblclick", function(){
  main.style.backgroundColor = "white"
  a.style.backgroundColor = "#40ff40"
  b.style.backgroundColor = "#ff5cb3"
  c.style.backgroundColor = "#45fcfd"
  d.style.backgroundColor = "yellow"
  h1.style.color = "black"
})
c.addEventListener("dblclick", function(){
  main.style.backgroundColor = "white"
  a.style.backgroundColor = "#40ff40"
  b.style.backgroundColor = "#ff5cb3"
  c.style.backgroundColor = "#45fcfd"
  d.style.backgroundColor = "yellow"
  h1.style.color = "black"
})
d.addEventListener("dblclick", function(){
  main.style.backgroundColor = "white"
  a.style.backgroundColor = "#40ff40"
  b.style.backgroundColor = "#ff5cb3"
  c.style.backgroundColor = "#45fcfd"
  d.style.backgroundColor = "yellow"
  h1.style.color = "black"
})

let cs = document.querySelector("#cursor")

main.addEventListener("mousemove", function(move){
  cs.style.left = move.x+"px"
  cs.style.top = move.y+"px"
})
