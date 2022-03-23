import './style.css';
import home from './home.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';

const restaurantPages = [home(), about(), menu(), contact()];
let i = 0;

function component() {
  const element = restaurantPages[i];

  return element;
}

document.getElementById('content').appendChild(component());

document.addEventListener('keydown', function(event){
  if(event.keyCode === 9){
    if(i===3){
      i=0;
    }
    else{
      i++;
    }
    let content = document.getElementById('content');
    while(content.firstChild){
      content.removeChild(content.firstChild);
    }
    content.appendChild(component());
  }
});


