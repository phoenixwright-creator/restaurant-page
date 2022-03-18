import './style.css';
import loading from './loading.js';

function component() {
  const element = loading();

  return element;
}

document.getElementById('content').appendChild(component());
