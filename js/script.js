const yesList = [
  "https://www.alternet.org/",
  "https://abcnews.go.com/",
  "https://apnews.com/",
  "https://www.bloomberg.com/",
  "https://www.buzzfeednews.com/",
  "https://www.cbsnews.com/",
  "https://www.cnn.com/",
  "https://www.thedailybeast.com/",
  "https://www.democracynow.org/",
  "https://www.forbes.com/",
  "https://www.foxnews.com/",
  "https://www.nytimes.com/",
  "https://www.reuters.com/",
  "https://www.usatoday.com/",
  "https://www.economist.com/",
  "https://www.newyorker.com/",
  "https://bostonreview.net/",
  "https://www.bridgealliance.us/",
  "https://calwatchdog.com/",
  "https://www.cbn.com/",
  "https://www.cnet.com/",
  "https://www.wiscnews.com/bdc/",
  "https://www.defenseone.com/",
  "https://fee.org/",
  "https://foreignpolicy.com/",
  "https://freedomhouse.org/",
  "https://freakonomics.com/",
  "https://gizmodo.com/",
  "https://hamptonroadsmessenger.com/",
  "https://heavy.com/",
  "https://www.ibtimes.com/",
  "https://www.justfacts.com/",
  "https://www.latinorebels.com/",
  "https://www.presstelegram.com/",
  "https://www.livescience.com/",
  "https://justthenews.com/",
  "https://www.kalw.org/",
  "https://katu.com/",
  "https://www.intellectualconservative.com/",
  "https://www.indystar.com/",
  "https://www.indeonline.com/",
  "https://ijr.com/",
  "https://www.idsnews.com/",
  "https://www.idahostatesman.com/",
  "https://www.huffpost.com/",
  "https://www.chron.com/",
  "https://hotair.com/",
  "https://www.civilbeat.org/",
  "https://hiplatina.com/",
  "https://hightimes.com/",
  "https://www.heralddemocrat.com/",
  "https://heavy.com/",
  "https://www.hbs.edu/",
  "https://www.haaretz.com/",
  "https://grist.org/",
  "https://www.gq.com/",
  "https://www.gao.gov/",
  "https://www.gop.gov/",
  "https://news.google.com/",
  "https://www.golocalprov.com/",
  "https://www.glaad.org/",
  "https://www.gallup.com/home.aspx",
  "https://www.frontpagemag.com/",
  "https://www.foxbusiness.com/",
  "https://fortune.com/",
  "https://www.thefiscaltimes.com/",
  "https://firstdraftnews.org/",
  "https://www.ft.com/",
  "https://www.eurekalert.org/",
  "https://www.esquire.com/",
  "https://erraticus.co/",
  "https://www.espn.com/",
  "https://www.edf.org/",
  "https://www.elle.com/",
  "https://www.eastbaytimes.com/",
  "https://www.drudgereport.com/",
  "https://www.dailykos.com/",
  "https://dailynorthwestern.com/",
  "https://www.dailypress.com/",
  "https://cuindependent.com/",
  "https://www.currentaffairs.org/",
  "https://cookpolitical.com/",
  "https://www.commentary.org/",
  "https://www.coffeepartyusa.com/",
  "https://www.city-journal.org/",
  "https://www.chicagotribune.com/",
  "https://chicago.suntimes.com/",
  "https://www.cbpp.org/",
  "https://csbaonline.org/",
  "https://publicintegrity.org/",
  "https://www.americanprogress.org/",
  "https://www.cato.org/",
  "https://www.brookings.edu/",
  "https://brownstone.org/",
  "https://www.blackenterprise.com/",
  "https://www.breitbart.com/",
  "https://www.axios.com/",
  "https://www.bbc.com/news",
  "https://www.csmonitor.com/",
  "https://www.newsweek.com/",
  "https://time.com/"
]

document.querySelector('.yes').addEventListener('click', function(){
  let rand = Math.floor(Math.random()*yesList.length)
  window.open(`${yesList[rand]}`,'_blank')
})

document.querySelector('.no').addEventListener('click', function(){
  document.querySelector('.purchasePage').classList.remove('hidden')
  document.querySelector('#menuToggle').classList.add('hidden')
  document.querySelector('.burgermenu').classList.add('hidden')
})

document.querySelector('.closeModalM').addEventListener('click', function(){
  document.querySelector('.purchasePage').classList.add('hidden')
  document.querySelector('#menuToggle').classList.remove('hidden')
  document.querySelector('.burgermenu').classList.remove('hidden')
})

document.querySelector('.closeModalD').addEventListener('click', function(){
  document.querySelector('.purchasePage').classList.add('hidden')
  document.querySelector('#menuToggle').classList.remove('hidden')
  document.querySelector('.burgermenu').classList.remove('hidden')
})


document.querySelector('.closeTrigger').addEventListener('click', function(event){
  if(!event.target.classList.contains('hidden')){
    document.querySelector('.purchasePage').classList.add('hidden')
    document.querySelector('#menuToggle').classList.remove('hidden')
    document.querySelector('.burgermenu').classList.remove('hidden')
  }
})

document.querySelector('.closeTrigger').addEventListener('click', function(event){
  if(!event.target.classList.contains('hidden')){
    document.querySelector('.purchasePage').classList.add('hidden')
    document.querySelector('#menuToggle').classList.remove('hidden')
    document.querySelector('.burgermenu').classList.remove('hidden')
  }
})

// "OH, GOOD READING TO YOU,"

document.getElementById('menuToggle').addEventListener('change', function(){
  if(this.checked){
    setTimeout(function(){
    // document.getElementById('overlay').classList.remove('hidden')
    // document.getElementById('overlay').classList.add('overlayActive')
    // document.getElementById('menuOverlay').classList.add('mmOverlayWdith')
      document.getElementById('menuOverlay').classList.remove('hidden')
      document.querySelector('.navList').classList.remove('hidden')
    },150)
  }else{
    setTimeout(function(){
    // document.getElementById('overlay').classList.remove('overlayActive')
    // document.getElementById('menuOverlay').classList.remove('mmOverlayWdith')
      // document.getElementById('overlay').classList.add('hidden')
      document.getElementById('menuOverlay').classList.add('hidden')
      document.querySelector('.navList').classList.add('hidden')
    },150)
    
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
  document.querySelector(".mobileNav").classList.remove("hidden")
  // document.querySelector(".menuToggle").classList.remove("hidden")
  // document.querySelector(".navList").classList.remove("hidden")
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
  document.querySelector(".navList").classList.add("hidden");
  // document.getElementById('overlay').classList.remove('overlayActive')
  document.getElementById('menuOverlay').classList.add('hidden')
  // document.getElementById('overlay').classList.add('hidden')
  document.getElementById('menuToggle').checked = false;
});

document.querySelector(".aboutBtn").addEventListener("click", function(){
  document.querySelector(".homeBtn").classList.remove("selectedNav")
  document.querySelector(".aboutBtn").classList.add("selectedNav")
  document.querySelector(".home").classList.add("hidden");
  document.querySelector(".about").classList.remove("hidden");
  document.querySelector(".navList").classList.add("hidden");
  // document.getElementById('overlay').classList.remove('overlayActive')
  document.getElementById('menuOverlay').classList.add('hidden')
  // document.getElementById('overlay').classList.add('hidden')
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