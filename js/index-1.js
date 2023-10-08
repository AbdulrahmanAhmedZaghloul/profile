
let teoset = $("#about").offset().top;

$(window).scroll(function () {
  let doscroll = $(window).scrollTop();
  if (doscroll > teoset - 50) {
    $("#ven").css("backgroundColor", "rgba(0, 0, 0, 0.9)");
    $("#butup").fadeIn(500);
  } else {
    $("#ven").css("backgroundColor", " transparent");
    $("#butup").fadeOut(500);
  }
});

$("#butup").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 6000);
});

$("a[href^='#']").click(function () {
  let ahref = $(this).attr("href");
  let asd = $(ahref).offset().top;
  $("html,body").animate({ scrollTop: asd }, 2000);
});
$("#toggln").click(function () {
  let boxwidth = $("#colorbox").innerWidth();
  if ($("#side").css("left") == "0px") {
    $("#side").animate({ left: `-${boxwidth}` }, 1000);
  } else {
    $("#side").animate({ left: `0px` }, 1000);
  }
});

for (let i = 0; i < $(".item").length; i++) {
  let red = Math.round(Math.random() * 234);
  let red1 = Math.round(Math.random() * 234);
  let red2 = Math.round(Math.random() * 234);
  $(".item").eq(i).css("backgroundColor", `rgb(${red},${red1},${red2})`);
}

$(".item").click(function () {
  let xcolor = $(this).css("backgroundColor");
  $("p ,h1 ,h2,h3,h4,h5,h6,a").css("color", xcolor);
});

$(document).ready(function () {
  $("#loed").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});
let x = setTimeout(function () {console.log('hllol')},3000);

let words = document.querySelectorAll(".word");

words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);

//circle skills//////////////////////////////////
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `
  <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// /////////////////// portfolio section  ////////////////////////
// var mixer = mixitup(".portfolio-gallery");

///////////////// active menu  ////////////////////////

let menuLi = document.querySelectorAll("header  a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();

window.addEventListener("scroll", activeMenu);
/////////////////// sticky navbar  ////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});
/////////////////// toggle icon navbar  ////////////////////////
let menuIcon = document.querySelector("#menu-icon");

let navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
  //  menuIcon.classList.toggle("fa-thin");
 menuIcon.classList.toggle("fa-xmark");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  //  menuIcon.classList.toggle("fa-thin");
 menuIcon.classList.remove("fa-xmark");
  navlist.classList.remove("open");
};


/////////////////// toggle icon navbar  ////////////////////////
const observer =new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
entry.target.classList.add("show-items");
}
else{
  entry.target.classList.remove("show-items");
}
  });
});

const scrollScale =document.querySelectorAll(".scroll-scale")
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom =document.querySelectorAll(".scroll-bottom")
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop =document.querySelectorAll(".scroll-top")
scrollTop.forEach((el)=>observer.observe(el));



///////////// the hour/////////////

function updatetime() {
  const now = new Date();

  const hours = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hoursAngle = 30 * hours + minute / 2;
  const minuteAngle = 6 * minute;
  const secondAngle = 6 * second;

  const hourHand = document.querySelector(".hour-hand");
  minutHand = document.querySelector(".minute-hand");
  secondHand = document.querySelector(".second-hand");


  hourHand.style.transform = `rotate(${hoursAngle}deg)`;
  minutHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}
setInterval(updatetime, 1000);



function data(){
  let full =new Date();
  $("#hour1").text(full.getHours())
  $("#minutes1").text(full.getMinutes())
  $("#seconds1").text(full.getSeconds())
  }
  setInterval(data,1000);
  