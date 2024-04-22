// git config core.autocrlf false;

const checkString = (stringChars, lengthMax) =>
  stringChars.length <= lengthMax;

checkString('проверяемая строка', 20);
checkString('проверяемая строка', 18);
checkString('проверяемая строка', 10);

// палиндром
function checkPalindrom(rawString) {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

checkPalindrom('топот');
checkPalindrom('ДовОд');
checkPalindrom('Кекс');
checkPalindrom('Лёша на полке клопа нашёл ');

//еще один палиндром

var poly = 1023094885;
var ylop = 0;
var isPalindrome = false;
var number = poly;

number = number.toString();
var splitString = number.split("");
var reverseArray = splitString.reverse();
ylop = reverseArray.join("");

if (ylop == poly) {
  isPalindrome = true;
}

// извлечение числа из строки
function extractNumber(arg) {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result,10);
}

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');

// случайное число
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// случайное позитивное число
function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// случайное неповторяющееся число
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// обработчик на появление и исчезание попапа
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.button-show');
const closePopupButton = popup.querySelector('.button-hide');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--open');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('popup--open');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('popup--open');
  }
});

var thumbnails = document.querySelectorAll('.gallery__picture-preview');
var fullPhoto = document.querySelector('.full-picture');

// замыкание для большой и малых фото
var addThumbnailClickHandler = function (thumbnail, picture) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = picture;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], pictures[i]);
}

// добавляет/удаляет лайк
let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  
  heart.classList.toggle('added');
};

// ввод в инпут и создание нового комментария
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
commentForm.onsubmit = function (evt) {
  evt.preventDefault();
  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
};
// Контейнер для сообщений
let chatContainer = document.querySelector('.chat-content');
// Создаем динамическую коллекцию из сообщений внутри контейнера сообщений
let items = chatContainer.children;
// Форма и поле ввода текста
let newMessageForm = document.querySelector('.chat-form');
let newMessageInput = newMessageForm.querySelector('.chat-form-input');
// Шаблон для сообщения
let messageTemplate = document.querySelector('#message-template').content;
let newMessageTemplate = messageTemplate.querySelector('.chat-message');
// Удаление сообщения по крестику
let deleteMessageHandler = function(item) {
  let closeButton = item.querySelector('.chat-message-button');
  closeButton.addEventListener('click', function() {
    item.remove();
  });
}
for (let i = 0; i < items.length; i++) {
  deleteMessageHandler(items[i]);
}
// Создание нового сообщения
newMessageForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  // Получаем текст из поля ввода
  let messageText = newMessageInput.value;
  // Клонируем шаблон сообщения
  let newMessage = newMessageTemplate.cloneNode(true);
  // Находим контейнер для текста и записываем туды сообщение из ввода
  newMessage.querySelector('.chat-message-text').textContent = messageText;
  // Добавляем сообщение на страницу
  chatContainer.appendChild(newMessage);
  // Добавляем обработчик удаления сообщений по крестику
  deleteMessageHandler(newMessage);
  // Чистим содержимое поля ввода
  newMessageInput.value = '';
});

// недоделанное про время
const a = "14:00";
const arr = a.split(':');

const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram/data';

const serverRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const httpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [httpMethod.GET]: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  [httpMethod.POST]: 'Не удалось отправить форму. Попробуйте ещё раз',
};

async function request(url, method = httpMethod.GET, body = null) {
  const response = await fetch(url, { method, body });
  if(!response.ok) {
    throw new Error(ErrorText[method]);
  }

  return response.json();
}

const loadPictures = async () => request(SERVER_URL + serverRoute.GET_DATA);

const sendPictures = async (pictureData) => request(SERVER_URL + serverRoute.SEND_DATA, httpMethod.POST, pictureData);

export { loadPictures, sendPictures };

//задержка в отправке
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};