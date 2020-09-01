const buttons = document.querySelectorAll('.drum');

buttons.forEach((button) => button.addEventListener('click', handleClick));

function handleClick() {
  var audio = new Audio('./dist/css/sounds/tom-1.mp3');
  audio.play();
}
