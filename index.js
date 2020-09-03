const buttons = document.querySelectorAll('.key');

buttons.forEach((button) => button.addEventListener('click', handleClick));

function handleClick() {
  console.log(this);

  const keyCode = this.getAttribute('data-key');
  console.log(keyCode);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}
