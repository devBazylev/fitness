const form = document.querySelector('.form__free-lesson');
const inputName = form.querySelector('.form__name');
const inputPhone = form.querySelector('.form__phone');
const nameError = form.querySelector('.form__error-name');
const phoneError = form.querySelector('.form__error-phone');
const submitButton = form.querySelector('.form__button');

const MAX_LETTERS_COUNT = 30;
let fixedPhoneValue;

const errorText = {
  EMPTY_NAME: 'Введите ваше имя',
  INVALID_NAME: 'Разрешены буквы и пробелы',
  EMPTY_PHONE: 'Введите номер телефона',
  INVALID_PHONE: 'Разрешены цифры, пробелы и скобки',
  INVALID_COUNT: `Максимум ${MAX_LETTERS_COUNT} символов`,
};

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
};

const validateLetters = (name) => {
  const reg = /^[a-zа-яё\s]*$/i;
  return reg.test(String(name));
};

const validateNumbers = (phone) => {
  const reg = /^[+0-9][-0-9()\s]*$/;
  return reg.test(String(phone));
};

const fixPhone = (phone) => {
  fixedPhoneValue = phone.toString().replace(/[-()\s]/g, '');
  return fixedPhoneValue;
};

const validateName = () => {
  const nameValue = inputName.value;
  if (nameValue.length === 0) {
    inputName.classList.add('form__error');
    nameError.textContent = errorText.EMPTY_NAME;
    toggleSubmitButton(true);
  } else {
    inputName.classList.remove('form__error');
    if (!inputPhone.classList.contains('form__error')){
      toggleSubmitButton(false);
    }
  }

  if (!validateLetters(nameValue)) {
    inputName.classList.add('form__error');
    nameError.textContent = errorText.INVALID_NAME;
    toggleSubmitButton(true);
    return false;
  } else {
    inputName.classList.remove('form__error');
    if (!inputPhone.classList.contains('form__error')){
      toggleSubmitButton(false);
    }
  }

  if (nameValue.length > MAX_LETTERS_COUNT) {
    inputName.classList.add('form__error');
    nameError.textContent = errorText.INVALID_COUNT;
    toggleSubmitButton(true);
    return false;
  } else {
    inputName.classList.remove('form__error');
    if (!inputPhone.classList.contains('form__error')){
      toggleSubmitButton(false);
    }
  }
};

const validatePhone = () => {
  const phoneValue = inputPhone.value;
  if (phoneValue.length === 0) {
    inputPhone.classList.add('form__error');
    phoneError.textContent = errorText.EMPTY_PHONE;
    toggleSubmitButton(true);
  } else {
    inputPhone.classList.remove('form__error');
    if (!inputName.classList.contains('form__error')){
      toggleSubmitButton(false);
    }
  }

  if (!validateNumbers(phoneValue)) {
    inputPhone.classList.add('form__error');
    phoneError.textContent = errorText.INVALID_PHONE;
    toggleSubmitButton(true);
    return false;
  } else {
    inputPhone.classList.remove('form__error');
    if (!inputName.classList.contains('form__error')) {
      toggleSubmitButton(false);
    }
  }

  if (phoneValue.length > MAX_LETTERS_COUNT) {
    inputPhone.classList.add('form__error');
    phoneError.textContent = errorText.INVALID_COUNT;
    toggleSubmitButton(true);
    return false;
  } else {
    inputPhone.classList.remove('form__error');
    if (!inputName.classList.contains('form__error')) {
      toggleSubmitButton(false);
    }
  }
  fixPhone(phoneValue);
};


const onSubmitButton = async (evt) => {
  evt.preventDefault();
  inputPhone.value = fixedPhoneValue;
  toggleSubmitButton(true);
  form.submit();
  form.reset();
  toggleSubmitButton(false);
};

inputName.addEventListener('input', validateName);
inputPhone.addEventListener('input', validatePhone);
form.addEventListener('submit', onSubmitButton);
