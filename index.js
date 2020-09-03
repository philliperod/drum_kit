const buttons = document.querySelectorAll('.key'); // store all buttons with "key" class in a Node list and into one variable "buttons"

buttons.forEach((button) => button.addEventListener('click', handleClick));
// for each value in a Node list assign an event with a "mouse click" and apply a constructor function

function handleClick() {
  const keyCode = this.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();

  // store whatever data-key attribute into variable "keyCode"
  // select audio element and corresponding stored variable "keyCode" and store it into variable "audio"
  // play mp3 source file found with corresponding variable "audio" with its attribute data-key
}

document.addEventListener('keydown', handlePress);
// check doc for any key presses and assign an event listener

function handlePress(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}
