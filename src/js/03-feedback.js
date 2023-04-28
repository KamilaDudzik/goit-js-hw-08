import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const buttonEl = document.querySelector("button[type ='submit']");
const emailEl = document.querySelector("input[name ='email']");
const messageEl = document.querySelector("textarea[name ='message']");

const data = {
  email: '',
  message: '',
};

const saveData = (event) => {
  event.preventDefault();
   event.target.value = data[event.target.name];
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const rememberData = () => {
  let objectData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (objectData) {
        emailEl.value = objectData.email;
        messageEl.value = objectData.message;
    } else {
        formEl.reset();
    };
};

rememberData();

formEl.addEventListener('input', throttle(saveData, 500));
buttonEl.addEventListener('click', localStorage.clear());