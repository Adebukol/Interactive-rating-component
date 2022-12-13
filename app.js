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


const element= document.getElementById("firstRate")
element.addEventListener("click", function(e) {
  document.querySelector(".rate").style.background ="hsl(217, 12%, 63%)";
});

localStorage.setItem('selectedNumber', [['1'],['2'],['3'],['4'],['5']]);
localStorage.getItem('selectedNumber');