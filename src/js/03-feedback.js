import throttle from 'lodash.throttle';
import storage from './storage';
const { save, load } = storage;

const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formData = {};
const formParcel = load(KEY);

if (formParcel) {
  formData = formParcel;
  setValue(formData, form);
}

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(inputLocalData, 500));

function inputLocalData({ target: { name, value } }) {
  formData[name] = value;
  save(KEY, formData);
}

function setValue(obj, form) {
  for (const key in obj) {
    form.elements[key].value = obj[key];
  }
}

function formSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(KEY);
}
