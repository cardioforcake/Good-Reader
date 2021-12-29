// "OH, GOOD READING TO YOU,"

setTimeout(function(){
  document.getElementById("goodreading").classList.remove("hidden")
},900)
setTimeout(function(){
  document.getElementById("goodreading").classList.add("goodreadingReveal")
},1000)

setTimeout(function(){
  document.getElementById("goodreading").classList.add("goodreadingHide")
},3000)
setTimeout(function(){
  document.getElementById("goodreading").classList.add("hidden")
},4000)

// "OH, SMILE"

setTimeout(function(){
  document.getElementById("smile").classList.remove("hidden")
},4400)
setTimeout(function(){
  document.getElementById("smile").classList.add("smileReveal")
},4500)

setTimeout(function(){
  document.getElementById("smile").classList.add("smileHide")
},6500)
setTimeout(function(){
  document.getElementById("smile").classList.add("hidden")
},7500)

// "ARE YOU A GOOD READER?"

setTimeout(function(){
  document.getElementById("areyou").classList.remove("hidden")
}, 7900)

setTimeout(function(){
  document.getElementById("areyou").classList.add("areyouReveal")
}, 8000)