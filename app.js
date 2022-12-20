const results = document.getElementById("result");
document.addEventListener('click', function(e) {
  if (!e.target.matches('#firstRate, #scndRate, #thirdRate, #fourthRate, #fifthRate')) return;
  //your code here
  document.getElementById("result").innerHTML = e.target.innerHTML
});

function show(){
  document.getElementById('thankyou-msg').style.display = "block";
  document.getElementById('our-rate').style.display = "none";
}


let firstEl= document.getElementById("firstRate");
let secondEl= document.getElementById("scndRate");
let thirdEl= document.getElementById("thirdRate");
let fourthEl= document.getElementById("fourthRate"); 
let fifthEl= document.getElementById("fifthRate");

function bg() {
  firstEl.style.background ="hsl(217, 12%, 63%)";
};

function cl() {
  secondEl.style.background ="hsl(217, 12%, 63%)";
};
function ab() {
  thirdEl.style.background ="hsl(217, 12%, 63%)";
};
function cd() {
  fourthEl.style.background ="hsl(217, 12%, 63%)";
};
function ef() {
  fifthEl.style.background ="hsl(217, 12%, 63%)";
};

