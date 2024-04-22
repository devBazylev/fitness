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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (product) {
  var goodItem = makeElement('li', 'good');

  var title = makeElement('h2', 'good__description', product.text);
  goodItem.appendChild(title);

  var picture = makeElement('img', 'good__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  goodItem.appendChild(picture);

  var price = makeElement('p', 'good__price', product.price + '₽/кг');
  goodItem.appendChild(price);

  var availabilityClass = 'good--available';
  if (!product.inStock) {
    availabilityClass = 'good--unavailable';
  }
  goodItem.classList.add(availabilityClass);

  if (product.isHit) {
    goodItem.classList.add('good--hit');
    var specialOffer = makeElement('p', 'good__special-offer', product.specialOffer);
  goodItem.appendChild(specialOffer);
  }
  
  return goodItem;
};

var renderCards = function (goods) {
  var cardList = document.querySelector('.goods');

  for (var i = 0; i < goods.length; i++) {
  var cardItem = createCard(goods[i]);
  cardList.appendChild(cardItem); 
  }
}
  
renderCards(cardsData);
