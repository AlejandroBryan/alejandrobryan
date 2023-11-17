import Modal from './modal.class.js';
export default class Form {
  constructor() {
    this.form = document.querySelector('#contact__form');
    this.allFields = document.querySelectorAll('#contact__form .form__control');
    this.insertValidationElements();
    this.name = document.querySelector('#name');
    this.name.previousValue = '';
    this.email = document.querySelector('#email');
    this.email.previousValue = '';
    this.message = document.querySelector('#message');
    this.message.previousValue = '';
    this.modal = new Modal();
    this.events();
  }

  // events
  events() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.formSubmitHandler();
      document.querySelector('#contact__form .btn').setAttribute('disabled', '');
      return true;
    });
    this.name.addEventListener('keyup', () => {
      this.isDifferent(this.name, this.nameHandler);
    });
    this.name.addEventListener('blur', () => {
      this.isDifferent(this.name, this.nameHandler);
    });
    this.email.addEventListener('keyup', () => {
      this.isDifferent(this.email, this.emailHandler);
    });
    this.email.addEventListener('blur', () => {
      this.isDifferent(this.email, this.emailHandler);
    });
    this.message.addEventListener('keyup', () => {
      this.isDifferent(this.message, this.messageHandler);
    });
    this.message.addEventListener('blur', () => {
      this.isDifferent(this.message, this.messageHandler);
    });
  }

  // methods
  isDifferent(el, handler) {
    if (el.previousValue != el.value) {
      handler.call(this);
    }
    el.previousValue = el.value;
  }
  formSubmitHandler() {
    this.emailAfterDelay();
    this.messageImmediately();
    this.messageAfterDelay();
    if (!this.name.errors && !this.email.errors && !this.message.errors) {
      this.submitHandler();
    }
  }
  async submitHandler() {
    const email = this.email.value;
    const name = this.name.value;
    const message = this.message.value;
    const data = {
      email,
      name,
      message
    };
    const api = 'https://email-receiver.herokuapp.com/contact';
    const settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
    try {
      const response = await fetch(`${api}`, settings);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.modal.show('Information successfully submitted, I really appreciate it!', 'Success', 'text__success');
      this.formReset();
      console.log(data);
      return data;
    } catch (err) {
      this.modal.show(err.message, 'Warning', 'text__danger');
    }
  }
  formReset() {
    this.name.value = '';
    this.email.value = '';
    this.message.value = '';
  }

  //name section
  nameHandler() {
    this.name.errors = false;
    this.nameImmediately();
    clearTimeout(this.name.timer);
    this.name.timer = setTimeout(() => this.nameAfterDelay(), 800);
  }
  nameImmediately() {
    if (this.name.value !== '' && this.name.value.length < 5) {
      this.showValidationError(this.name, `Please provide a longer name.`);
    }
    if (this.name.value.length > 50) {
      this.showValidationError(this.name, 'Your name cannot exceed 50 characters.');
    }
    if (!this.name.errors) {
      this.hideValidationError(this.name);
    }
  }
  nameAfterDelay() {
    if (this.name.value > 30 && this.name.value.length >= 1) {
      this.showValidationError(this.name, 'Name is too short.');
    }
    if (!this.name.errors) {
      this.hideValidationError(this.name);
    }
  }

  // email section

  emailHandler() {
    this.email.errors = false;
    clearTimeout(this.email.timer);
    this.email.timer = setTimeout(() => this.emailAfterDelay(), 800);
  }
  emailAfterDelay() {
    if (!/^\S+@\S+$/.test(this.email.value)) {
      this.showValidationError(this.email, 'Please provide a valid email address.');
    }
    if (!this.email.value) {
      this.hideValidationError(this.email);
    }
    if (!this.email.errors) {
      this.hideValidationError(this.email);
    }
  }

  // message section
  messageHandler() {
    this.message.errors = false;
    this.messageImmediately();
    clearTimeout(this.message.timer);
    this.message.timer = setTimeout(() => this.messageAfterDelay(), 800);
  }
  messageImmediately() {
    if (this.message.value !== '' && this.message.value.length < 150) {
      this.showValidationError(this.message, `Please write at least 150 characters.`);
    }
    if (this.message.value.length > 1000) {
      this.showValidationError(this.message, 'Your message can not exceed 500 characters.');
    }
    if (!this.message.errors) {
      this.hideValidationError(this.message);
    }
  }
  messageAfterDelay() {
    if (this.message.value < 50 && this.message.value.length >= 1) {
      this.showValidationError(this.message, 'Your message is too short.');
    }
    if (!this.message.errors) {
      this.hideValidationError(this.message);
    }
  }
  hideValidationError(el) {
    el.nextElementSibling.classList.remove('liveValidateMessage__visible');
  }
  showValidationError(el, msg) {
    el.nextElementSibling.innerHTML = `<p>${msg}</p>`;
    el.nextElementSibling.classList.add('liveValidateMessage__visible');
    el.errors = true;
  }
  insertValidationElements() {
    this.allFields.forEach(el => {
      el.insertAdjacentHTML('afterend', `
                         <div class="alert danger liveValidateMessage small">
                             
                         </div>
                     `);
    });
  }
}