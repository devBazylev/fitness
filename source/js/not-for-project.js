// git config core.autocrlf false;

function getTextNodesIn(elem, optionFilter) {
  let textNodes = [];
  if (elem) {
    for (let nodes = elem.childNodes, i = nodes.length; i--;) {
      const node = nodes[i],
        nodeType = node.nodeType;
      if (nodeType === 3) {
        if (!optionFilter || optionFilter(node, elem)) {
          if (node.data.trim() !== '') {
            textNodes.push(node.data.trim() !== '' ? node : '');

          }
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, optionFilter));
      }
    }
  }
  return textNodes;
}

getTextNodesIn(document.body).forEach((item) => {
  item.textContent = 'У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон.';
});

const toggleDisabled = (button, flag) => {
  button.disabled = flag;
  button.textContent = flag ? 'Отправляем...' : 'Отправить';
};

const isKeydown = (evt, keydown) => evt.key === keydown;
const isTargetClick = (evt, selector) => evt.target.closest(selector);

async function request(url, method = httpMethod.GET, body = null) {
  const response = await fetch(url, { method, body });
  if(!response.ok) {
    throw new Error(ErrorText[method]);
  }

  return response.json();
}
