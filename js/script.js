// "OH, GOOD READING TO YOU,"

setTimeout(function(){
  document.getElementById("goodreading").classList.remove("hidden")
},900)
setTimeout(function(){
  document.getElementById("goodreading").classList.add("reveal")
},1000)

setTimeout(function(){
  document.getElementById("goodreading").classList.add("hide")
},3000)
setTimeout(function(){
  document.getElementById("goodreading").classList.add("hidden")
},4000)

// "OH, SMILE"

setTimeout(function(){
  document.getElementById("smile").classList.remove("hidden")
},4400)
setTimeout(function(){
  document.getElementById("smile").classList.add("reveal")
},4500)

setTimeout(function(){
  document.getElementById("smile").classList.add("hide")
},6500)
setTimeout(function(){
  document.getElementById("smile").classList.add("hidden")
},7500)

// "ARE YOU A GOOD READER?"

setTimeout(function(){
  document.getElementById("areyou").classList.remove("hidden")
}, 7900)

setTimeout(function(){
  document.getElementById("areyou").classList.add("reveal")
}, 8000)

setTimeout(function(){
  document.querySelector(".no").classList.remove("hidden")
}, 8900)
setTimeout(function(){
  document.querySelector(".no").classList.add("fastReveal")
}, 9000)

setTimeout(function(){
  document.querySelector(".yes").classList.remove("hidden")
}, 9900)

setTimeout(function(){
  document.querySelector(".yes").classList.add("fastReveal")
}, 10000)