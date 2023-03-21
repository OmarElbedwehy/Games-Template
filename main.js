document.querySelector(".go-down").addEventListener("click", ()=>{
  window.scrollTo({
      top: 700,
      behavior: "smooth",
  })
})

let counter = setInterval(()=>{
  let year_now = new Date().getFullYear()
  let countDown = new Date(`sep 29, ${year_now} 18:59:59`).getTime()
  let date_now = new Date().getTime();

  let dateDiff = countDown - date_now;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
  let secounds = Math.floor(dateDiff % (1000 * 60) / (1000));

  if (days < 10){
    days = `0${days}`;
  }
  if (hours < 10){
    hours = `0${hours}`;
  }
  if (minutes < 10){
    minutes = `0${minutes}`;
  }
  if (secounds < 10){
    secounds = `0${secounds}`;
  }
  document.querySelector("#days").textContent = days;
  document.querySelector("#hours").textContent = hours;
  document.querySelector("#minutes").textContent = minutes;
  document.querySelector("#secounds").textContent = secounds;
})

const cards_interval = (ele)=>{
  let goal = ele.dataset.goal;
  let i = 0;
  let interval = setInterval(()=>{
    ele.textContent = i;
    if (i == goal){
      clearInterval(interval)
    }
    i++
  }, 1000 / goal)
}

let started = false;

window.onscroll = ()=>{
  let cards = document.querySelectorAll("#card-num");

  if (!started){
    if (window.scrollY >= document.querySelector("#stats").offsetTop - 300){
      cards.forEach((card)=>cards_interval(card));
      started = true;
    }
  }

  if (window.scrollY >= 100){
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    document.querySelector(".scroller").style.width = `${(scrollTop / height) * 100}%`;
  }else{
    document.querySelector(".scroller").style.width = 0;
  }

  if (window.scrollY >= document.querySelector("#skills").offsetTop - 200){
    document.querySelectorAll(".precent span").forEach((ele)=>{
      let precent = ele.dataset.precent;
      ele.style.width = `${precent}%`
    })
  }else{
    document.querySelectorAll(".precent span").forEach((ele)=>{
      ele.style.width = 0;
    })
  }
}
