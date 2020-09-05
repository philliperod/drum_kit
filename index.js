const buttons = document.querySelectorAll('.key'); // store all buttons with "key" class in a Node list and into one variable "buttons"
buttons.forEach((button) => button.addEventListener('click', handleClick));
// for each value in a Node list assign an event with a "mouse click" and apply a constructor function

function handleClick() {
  const keyCode = this.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}
// store the selected element with defined data-key into "keyCode" provided by click eventlistener
// store the audio element with defined data-key into variable "audio"
// keep play time of audio at zero and play
// store the selected "key" class with defined data-key into "keyAnimation"
// add "pressed" class (with CSS applied) to variable keyAnimation which holds selected element

document.addEventListener('keydown', handlePress);
// check doc for any key presses and assign an event listener

function handlePress(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  const keyAnimation = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  keyAnimation.classList.add('pressed');
}
// store the selected element with defined data-key into "audio" provided by input given from "keydown" eventListener
// keep play time of audio at zero and play
// store the selected "key" class with defined data-key into "keyAnimation"
// add "pressed" class (with CSS applied) to variable keyAnimation which holds selected element

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removePressed));

function removePressed(event) {
  this.classList.remove('pressed');
}
