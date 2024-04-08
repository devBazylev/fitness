const setDataId = (elems) => {
  for (let i = 0; i < elems.length; i++) {
    elems[i].dataset.id = i;
  }
};

const resetClass = (array, classs) => {
  array.forEach((elem) => {
    if (elem.classList.contains(classs)) {
      elem.classList.remove(classs);
    }
  });
};

const setClass = (array, classs, id) => {
  resetClass(array, classs);
  array[id].classList.add(classs);
};

const changeText = (array, key) => {
  array.forEach((elem) => {
    elem.textContent = key;
  });
};

const setListener = (varr, action, func) => {
  varr.addEventListener(action, func);
};

const setListenerArray = (array, action, func) => {
  array.forEach((elem) => {
    elem.addEventListener(action, func);
  });
};

export { setDataId, setClass, resetClass, changeText, setListenerArray, setListener };
