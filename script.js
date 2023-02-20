function getKey (e) {
  var location = e.location;
  var selector;
  if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      selector = ['[data-key="' + e.keyCode + '-R"]']
  } else {
      var code = e.keyCode || e.which;
      selector = [
          '[data-key="' + code + '"]',
          '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
      ].join(',');
  }
  return document.querySelector(selector);
}

function pressKey (char) {
  var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
  if (!key) {
      return console.warn('No key for', char);
  }
  key.setAttribute('data-pressed', 'on');
  setTimeout(function () {
      key.removeAttribute('data-pressed');
  }, 200);
}

var h1 = document.querySelector('h1');
var originalQueue = h1.innerHTML;
var queue = h1.innerHTML;

function next () {
  var c = queue[0];
  queue = queue.slice(1);
  h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
  pressKey(c);
  if (queue.length) {
      setTimeout(next, Math.random() * 200 + 50);
  }
}

h1.innerHTML = "&nbsp;";
setTimeout(next, 500);

document.body.addEventListener('keydown', function (e) {
  var key = getKey(e);
  if (!key) {
      return console.warn('No key for', e.keyCode);
  }

  key.setAttribute('data-pressed', 'on');
});

document.body.addEventListener('keyup', function (e) {
  var key = getKey(e);
  key && key.removeAttribute('data-pressed');
});

function size () {
  var size = keyboard.parentNode.clientWidth / 90;
  keyboard.style.fontSize = size + 'px';
  console.log(size);
}

var keyboard = document.querySelector('.keyboard');
window.addEventListener('resize', function (e) {
  size();
});
size();
// @@@@@@@@@@@@@@@@@@@@@@ music part@@@@@@@@@@@@@@@@@@@
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

});

}

document.addEventListener("keypress", function(event) {

makeSound(event.key);

buttonAnimation(event.key);

});


function makeSound(key) {

switch (key) {
  case "s":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "d":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

  case "f":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

  case "g":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

  case "h":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

  case "j":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

  case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;


  default: console.log(key);
  // ?????????????????????????????????????????// my self ?????????????????????????????

  case "q":
    var tom24 = new Audio("sounds/tom24.mp3");
    tom24.play();
    break;

  case "w":
    var tom6 = new Audio("sounds/tom6.mp3");
    tom6.play();
    break;

  case "e":
    var tom7 = new Audio('sounds/tom7.mp3');
    tom7.play();
    break;

  case "r":
    var tom8 = new Audio('sounds/tom8.mp3');
    tom8.play();
    break;

  case "t":
    var tom9 = new Audio('sounds/tom9.mp3');
    tom9.play();
    break;

  case "y":
    var tom10= new Audio('sounds/tom10.mp3');
    tom10.play();
    break;

  case "u":
    var tom11 = new Audio('sounds/tom11.mp3');
    tom11.play();
    break;

    case "i":
      var tom12 = new Audio("sounds/tom12.mp3");
      tom12.play();
      break;
  
    case "o":
      var tom13 = new Audio("sounds/tom13.mp3");
      tom13.play();
      break;
  
    case "p":
      var tom14 = new Audio('sounds/tom14.mp3');
      tom14.play();
      break;
  
    case "a":
      var tom15 = new Audio('sounds/tom15.mp3');
      tom15.play();
      break;
  
    case "l":
      var tom16 = new Audio('sounds/tom16.mp3');
      tom16.play();
      break;
  
    case "z":
      var tom17 = new Audio('sounds/tom17.mp3');
      tom17.play();
      break;
  
    case "x":
      var tom18 = new Audio('sounds/tom18.mp3');
      tom18.play();
      break;
      case "c":
        var tom19 = new Audio("sounds/tom19.mp3");
        tom19.play();
        break;
    
      case "v":
        var tom20 = new Audio("sounds/tom20.mp3");
        tom20.play();
        break;
    
      case "b":
        var tom21 = new Audio('sounds/tom21.mp3');
        tom21.play();
        break;
    
      case "n":
        var tom22 = new Audio('sounds/tom22.mp3');
        tom22.play();
        break;
    
      case "m":
        var tom23 = new Audio('sounds/tom23.mp3');
        tom23.play();
        break;
    
     


  // -----------------------------end----------------------
}
}


function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}

