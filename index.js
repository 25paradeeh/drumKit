var buttons = document.querySelectorAll(".drum");

for (i=0; i < buttons.length; i++){
  buttons[i].addEventListener("click", handleClick);
  document.addEventListener("keydown", handleClick);
}


function handleClick(e){
  var buttonInnerHTML = this.innerHTML;
  var buttonPressInnerHTML = e.key;
  switch(buttonInnerHTML || buttonPressInnerHTML){

case "w":
  alert("W button works");
  var tom1 = new audio("sounds/tom-1.mp3");
  tom1.play();
  break;

case "a":
  alert("A button works");
  var tom2 = new audio("sounds/tom-2.mp3");
  tom2.play();
  break;


case "s":
  alert("S button works");
  var tom3 = new audio("sounds/tom-3.mp3");
  tom3.play();
  break;


case "d":
  alert("D button works");
  var tom4 = new audio("sounds/tom-4.mp3");
  tom4.play();
  break;

case "j":
  alert("J button works");
  var crash = new audio("sounds/crash.mp3");
  crash.play();
  break;

case "k":
  alert("K button works");
  var kickBass = new audio("sounds/kick-bass.mp3");
  kickBass.play();
  break;

case "l":
  alert("L button works");
  var snare = new audio("sounds/snare.mp3");
  snare.play();
  break;
  default:
  console.log(buttonInnerHTML);
  }
}
