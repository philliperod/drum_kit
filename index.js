// store all buttons with "key" class in a Node list and into one variable "buttons"
const buttons = document.querySelectorAll('.key');

// for each value in a Node list assign an event with a "mouse click" and apply a constructor function
buttons.forEach((button) => button.addEventListener('click', handleClick));

function handleClick() {
  // store whatever data-key attribute into variable "keyCode"
  const keyCode = this.getAttribute('data-key');
  // select audio element and corresponding stored variable "keyCode" and store it into variable "audio"
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  // play mp3 source file found with corresponding variable "audio" with its attribute data-key
  audio.play();
}

// check doc for any key presses and assign an event listener
document.addEventListener('keydown', handlePress);

function handlePress(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}
