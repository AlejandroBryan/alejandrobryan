export default class Modal {
  constructor() {
    this.modal = document.querySelector('.modal');
    this.closeButton = document.querySelector('.close__button');
    this.title = document.querySelector('.modal__title');
    this.content = document.querySelector('.modal__content');
    this.body = document.querySelector('.modal__body');
    this.events();
  }

  events() {
    window.addEventListener('click', (e) => {
      if (e.target == this.modal) {
        this.close();
      }
    });

    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  show(message, title, status) {
    this.modal.style.display = 'block';
    this.title.innerText = title;
    this.content.style.color = `${status}`;
    this.body.innerHTML = ` <p>${message}</p>`;
  }

  close() {
    this.modal.style.display = 'none';
  }
}
