import { setDataId, setClass, setListenerArray } from './util.js';

const faq = document.querySelector('.faq__container');
const tabs = Array.from(faq.querySelectorAll('.faq__tab'));
const accordions = Array.from(faq.querySelectorAll('.faq__accordion'));
const titles = Array.from(faq.querySelectorAll('.faq__accordion h3'));
const buttons = Array.from(faq.querySelectorAll('.faq__accordion button'));
const paragraphes = Array.from(faq.querySelectorAll('.faq__accordion p'));

let tabId = 0;
let accordId = 0;
let activeTabArray;

const greatArray = [
  [{opened: true, title: 'Как стать членом фитнес-центра?', paragraph: 'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придёт вам на почту.'},
    {opened: false, title: 'Где можно посмотреть расписание?', paragraph: 'Яндекс Расписания — это сервис, где можно узнать актуальное расписание электричек, поездов, самолётов, автобусов, теплоходов и паромов.'},
    {opened: false, title: 'Есть кулеры в центре? Предоставляются полотенца?', paragraph: 'Подробная инструкция по обслуживанию кулера - как чистить, дезинфицировать, менять фильтры и устранять неполадки.'},
    {opened: false, title: 'Сколько тренеров работает в клубе и какова их квалификация?', paragraph: 'Тренер — это специалист в определенном виде спорта. Он руководит обучением спортсменов, их подготовкой к выступлениям и соревнованиям.'}],
  [{opened: false, title: 'Занятия с тренером входят в абонемент?', paragraph: 'При посещении тренажерного зала вам необходимо оплатить занятия с тренером отдельно. В зале всегда присутствует дежурный тренер, которому можно задать вопрос,  получить небольшую консультацию по тренажеру или технике выполнения упражнения.'},
    {opened: false, title: 'Можно ли заморозить абонемент?', paragraph: 'Вы можете заморозить Ваш абонемент на период таких обстоятельств (максимум на 7 календарных дней, минимум 3 календарных дня).'},
    {opened: false, title: 'Есть ли лимит по посещениям тренажерного зала и групповых занятий?', paragraph: 'Количество Посетителей каждого группового занятия ограничено вместимостью фитнес зала.'},
    {opened: false, title: 'Что такое семейный доступ и доступ для друзей?', paragraph: 'Благодаря функции «Семейный доступ» вся ваша семья может получить доступ к одним и тем же подпискам Apple.'}],
  [{opened: false, title: 'Предлагает ли клуб услуги по консультированию по вопросам питания?', paragraph: 'Да. Вы можете обратиться как к своему тренеру, так и к нашему нутрициологу. Специалист уточнит ваши данные, цели и предложит программу питания.'},
    {opened: false, title: 'Проводятся ли в клубе какие-либо мероприятия или соревнования?', paragraph: 'Поэтому, нужно разбить соревнования на три основные части: Красочное открытие (если речь идет о массовом шоу).'},
    {opened: false, title: 'Можно ли приобрести в центре спортивное питание?', paragraph: 'Спортивное питание в Минске. Цены. Онлайн-консультация специалиста. ✓ своя дисконтная программа, доставка по Беларуси!'},
    {opened: false, title: 'Есть ли в центре детская комната?', paragraph: 'Выбирайте игровую комнату для детей в Минске на relax.by. Адреса центров, стоимость посещения, отзывы родителей смотрите на нашем портале.'}],
  [{opened: false, title: 'Есть в фитнес-центре дресс-код?', paragraph: 'Для тренировок необходимо иметь предназначенную для этого закрытую спортивную обувь и одежду. Верхняя и нижняя части тела должны быть закрыты (используйте футболки, майки, спортивные брюки, шорты, кроссовки). В целях безопасности, запрещается тренироваться босиком, в пляжных или домашних тапочках и т. п., исключения составляют специальные классы (например, йога, пилатес). '},
    {opened: true, title: 'Можно ли приводить с собой детей на тренировки?', paragraph: 'Да, можно. В рамках комплексов прекрасные детские комнаты и тренеры со специальным образованием.'},
    {opened: false, title: 'Какие дополнительные правила посещения центра?', paragraph: 'Администрация Центра имеет право устанавливать дополнительные правила для обеспечения безопасности посетителей.'},
    {opened: false, title: 'Нужна ли медицинская справка для посещения залов и бассейна?', paragraph: 'Для посещения общественных бассейнов необходима медицинская справка. Ее предъявляют при первом посещении.'}],
];

setDataId(tabs);
setDataId(buttons);

const setActiveTabArray = () => {
  activeTabArray = greatArray[tabId];
};

const changeTitlesText = () => {
  for (let i = 0; i < titles.length; i++) {
    titles[i].textContent = activeTabArray[i].title;
  }
};

const changeParagraphsText = () => {
  for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].textContent = activeTabArray[i].paragraph;
  }
};

const changeAccordionState = () => {
  for (let i = 0; i < accordions.length; i++){
    if (activeTabArray[i].opened) {
      accordions[i].classList.add('faq__accordion--opened');
    } else {
      accordions[i].classList.remove('faq__accordion--opened');
    }
  }
};

const onButton = function () {
  accordId = +this.getAttribute('data-id');
  accordions[accordId].classList.toggle('faq__accordion--opened');

  const array = greatArray[tabId];
  if (array[accordId].opened) {
    array[accordId].opened = false;
  } else {
    array[accordId].opened = true;
  }
};

const onTab = function () {
  if (tabId !== +this.getAttribute('data-id')) {
    tabId = +this.getAttribute('data-id');
    setClass(tabs, 'faq__tab--active', tabId);
    setActiveTabArray();
    changeTitlesText();
    changeParagraphsText();
    changeAccordionState();
  }
};

setListenerArray(tabs, 'click', onTab);
setListenerArray(buttons, 'click', onButton);
