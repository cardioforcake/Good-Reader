// "OH, GOOD READING TO YOU,"

document.getElementById('menuToggle').addEventListener('change', function(){
  if(this.checked){
    document.getElementById('overlay').classList.remove('hidden')
    document.getElementById('overlay').classList.add('overlayActive')
    document.getElementById('menuOverlay').classList.add('mmOverlayWdith')
  }else{
    document.getElementById('overlay').classList.remove('overlayActive')
    document.getElementById('menuOverlay').classList.remove('mmOverlayWdith')
    // setTimeout(function(){
      document.getElementById('overlay').classList.add('hidden')
    // },900)
    
  }
})

setTimeout(function(){
  document.getElementById("goodreading").classList.remove("hidden");
},900);
setTimeout(function(){
  document.getElementById("goodreading").classList.add("reveal");
},1000);

setTimeout(function(){
  document.getElementById("goodreading").classList.add("hide");
},3000);
setTimeout(function(){
  document.getElementById("goodreading").classList.add("hidden");
},4000);

// "OH, SMILE"

setTimeout(function(){
  document.getElementById("smile").classList.remove("hidden");
},4400);
setTimeout(function(){
  document.getElementById("smile").classList.add("reveal");
},4500);

setTimeout(function(){
  document.getElementById("smile").classList.add("hide");
},6500);
setTimeout(function(){
  document.getElementById("smile").classList.add("hidden");
},7500);

// "ARE YOU A GOOD READER?"

setTimeout(function(){
  document.getElementById("areyou").classList.remove("hidden");
}, 7900);

setTimeout(function(){
  document.getElementById("areyou").classList.add("reveal");
}, 8000);

setTimeout(function(){
  document.querySelector(".no").classList.remove("hidden");
  document.querySelector(".yes").classList.remove("hidden");
}, 8900);
setTimeout(function(){
  document.querySelector(".no").classList.add("fastReveal");
  document.querySelector(".yes").classList.add("fastReveal");
  document.querySelector(".navList").classList.remove("hidden")
}, 9000);

// DESTOP VERSION

setTimeout(function(){
  document.getElementById("goodreadingd").classList.remove("hidden");
},900);
setTimeout(function(){
  document.getElementById("goodreadingd").classList.add("reveal");
},1000);

setTimeout(function(){
  document.getElementById("goodreadingd").classList.add("hide");
},3000);
setTimeout(function(){
  document.getElementById("goodreadingd").classList.add("hidden");
},4000);

// "OH, SMILE"

setTimeout(function(){
  document.getElementById("smiled").classList.remove("hidden");
},4400);
setTimeout(function(){
  document.getElementById("smiled").classList.add("reveal");
},4500);

setTimeout(function(){
  document.getElementById("smiled").classList.add("hide");
},6500);
setTimeout(function(){
  document.getElementById("smiled").classList.add("hidden");
},7500);

// "ARE YOU A GOOD READER?"

setTimeout(function(){
  document.getElementById("areyoud").classList.remove("hidden");
}, 7900);

setTimeout(function(){
  document.getElementById("areyoud").classList.add("reveal");
}, 8000);

setTimeout(function(){
  document.querySelector(".no").classList.remove("hidden");
  document.querySelector(".yes").classList.remove("hidden");
}, 8900);
setTimeout(function(){
  document.querySelector(".no").classList.add("fastReveal");
  document.querySelector(".yes").classList.add("fastReveal");
  document.querySelector(".navListD").classList.remove("hidden")
}, 9000);

// setTimeout(function(){
//   document.querySelector(".yes").classList.remove("hidden");
// }, 9900);

// setTimeout(function(){
//   document.querySelector(".yes").classList.add("fastReveal");
// }, 10000);

document.querySelector(".homeBtn").addEventListener("click", function(){
  document.querySelector(".homeBtn").classList.add("selectedNav")
  document.querySelector(".aboutBtn").classList.remove("selectedNav")
  document.querySelector(".home").classList.remove("hidden");
  document.querySelector(".about").classList.add("hidden");
  document.getElementById('overlay').classList.remove('overlayActive')
  document.getElementById('menuOverlay').classList.remove('mmOverlayWdith')
  document.getElementById('overlay').classList.add('hidden')
  document.getElementById('menuToggle').checked = false;
});

document.querySelector(".aboutBtn").addEventListener("click", function(){
  document.querySelector(".homeBtn").classList.remove("selectedNav")
  document.querySelector(".aboutBtn").classList.add("selectedNav")
  document.querySelector(".home").classList.add("hidden");
  document.querySelector(".about").classList.remove("hidden");
  document.getElementById('overlay').classList.remove('overlayActive')
  document.getElementById('menuOverlay').classList.remove('mmOverlayWdith')
  document.getElementById('overlay').classList.add('hidden')
  document.getElementById('menuToggle').checked = false;
});

document.querySelector(".homeBtnD").addEventListener("click", function(){
  document.querySelector(".homeBtnD").classList.add("selectedNav")
  document.querySelector(".aboutBtnD").classList.remove("selectedNav")
  document.querySelector(".home").classList.remove("hidden");
  document.querySelector(".about").classList.add("hidden");
  document.getElementById('overlay').classList.remove('overlayActive')
  document.getElementById('menuOverlay').classList.remove('mmOverlayWdith')
  document.getElementById('overlay').classList.add('hidden')
  document.getElementById('menuToggle').checked = false;
});

document.querySelector(".aboutBtnD").addEventListener("click", function(){
  document.querySelector(".homeBtnD").classList.remove("selectedNav")
  document.querySelector(".aboutBtnD").classList.add("selectedNav")
  document.querySelector(".home").classList.add("hidden");
  document.querySelector(".about").classList.remove("hidden");
  document.getElementById('overlay').classList.remove('overlayActive')
  document.getElementById('menuOverlay').classList.remove('mmOverlayWdith')
  document.getElementById('overlay').classList.add('hidden')
  document.getElementById('menuToggle').checked = false;
});