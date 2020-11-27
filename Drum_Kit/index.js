
  var tom1 = new Audio('sounds/tom-1.mp3')
  var tom2 = new Audio('sounds/tom-2.mp3')
  var tom3 = new Audio('sounds/tom-3.mp3')
  var tom4 = new Audio('sounds/tom-4.mp3')
  var snare = new Audio('sounds/snare.mp3')
  var kickbass = new Audio('sounds/kick-bass.mp3')
  var crash = new Audio('sounds/crash.mp3')
for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
// document.querySelectorAll("button")[i].addEventListener("click, function () {   //Playing using mouse.

document.addEventListener("keypress", function () {
playSound(event.key)
buttonAnimation(event.key)
})

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
var buttonInnerHTML = this.innerHTML
playSound(buttonInnerHTML)
buttonAnimation(buttonInnerHTML)

})
}





function playSound(e)
{

switch (e) {
  case 'w':
    tom1.play();
    break;
  case 'a':
    tom2.play()
    break
  case 's':
  tom3.play()
  case 'd':
  tom4.play()
  case 'j':
  snare.play()
  case 'k':
  kickbass.play()
  break
  case 'l':
  crash.play()
  break
  default:
crash.play();
}
}




function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed")
  setTimeout(function () {
    activeButton.classList.remove("pressed");}, 100);
  }





  // console.log(this);
  // tom1.play();}
