const buttons = document.querySelectorAll('.key');
// store all buttons with "key" class in a Node list and into one variable "buttons"

buttons.forEach((button) => button.addEventListener('click', handleClick));
// "buttons.forEach(..) will place the stored values of variable "buttons" into a node list
// value: <button data-key="87" class="key">w</button>, <button data-key="87" class="key">w</button>, ...
// index: 0, 1, ...
// for each value in a Node list assign an event with a "mouse click" and apply a constructor function "handleClick"

function handleClick() {
  const keyCode = this.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}
// store attribute data-key into variable "keyCode" provided by click eventlistener from element <button>
// store the audio element that has a particular attribute data-key that was stored in variable "keyCode"
// keep play time of audio at zero and play

document.addEventListener('keydown', handlePress);
// check doc for any key presses and assign an event listener

function handlePress(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  const keyAnimation = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  keyAnimation.classList.add('pressed');
}
// store attribute data-key into variable "audio" provided by keydown
// keep play time of audio at zero and play
// store the attribute data-key from "key" class into "keyAnimation"
// add "pressed" class (with CSS applied) to variable keyAnimation which holds selected element

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removePressed));

function removePressed(event) {
  this.classList.remove('pressed');
}
