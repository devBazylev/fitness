import { setDataId, setClass, changeText, setListenerArray } from './util.js';

const price = document.querySelector('.price');
const tabs = Array.from(price.querySelectorAll('.price__tab'));
const priceTrainer = Array.from(price.querySelectorAll('.price__with-trainer'));
const priceDaily = Array.from(price.querySelectorAll('.price__daily'));
const priceFullDay = Array.from(price.querySelectorAll('.price__full-day'));

let tabId = 0;

const data = [
  {trainer: '5000', daily: '1700', full: '2700'},
  {trainer: '30000', daily: '10200', full: '16200'},
  {trainer: '60000', daily: '20400', full: '32400'},
];

setDataId(tabs);

const onTab = function () {
  tabId = +this.getAttribute('data-id');
  setClass(tabs, 'price__tab--active', tabId);
  changeText(priceTrainer, data[tabId].trainer);
  changeText(priceDaily, data[tabId].daily);
  changeText(priceFullDay, data[tabId].full);
};

setListenerArray(tabs, 'click', onTab);
