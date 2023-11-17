import NavBar from './modules/navbar.class';
import Modal from './modules/modal.class';
import Form from './modules/form-validator.class';
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.toggle__button')) {
    new NavBar();
  }
  //if(document.querySelector('.modal')){new Modal()};
  if (document.querySelector('.contact__form')) {
    new Form();
  }
  let codeBlocks = document.querySelectorAll('figure > pre > code');
  let copyCodeButtons = document.querySelectorAll('.copy-code-button');
  copyCodeButtons.forEach((copyCodeButton, index) => {
    let code = codeBlocks[index].innerText;
    copyCodeButton.addEventListener('click', () => {
      window.navigator.clipboard.writeText(code);
      copyCodeButton.classList.remove('fa-copy');
      copyCodeButton.classList.add('fa-check');
      setTimeout(() => {
        copyCodeButton.classList.remove('fa-check');
        copyCodeButton.classList.add('fa-copy');
      }, 2000);
    });
  });
});
$(document).ready(function () {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    "showImageNumberLabel": true,
    alwaysShowNavOnTouchDevices: true
  });
});