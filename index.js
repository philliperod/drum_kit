const buttons = document.querySelectorAll('.drum');

buttons.forEach((button) => button.addEventListener('click', handleClick));

function handleClick() {
  alert('You just clicked me');
}
