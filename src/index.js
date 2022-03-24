import './style.css';
import home from './home.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';

const restaurantPages = [home(), about(), menu(), contact()];
let i = 0;

function component() {
  const content = document.getElementById('content');
    while(content.firstChild){
      content.removeChild(content.firstChild);
    }
  const element = restaurantPages[i];
  return element;
}

function clickPage(event){
  switch(event.target.id){
      case 'restaurant-logo':
        i = 0;
        break;
      case 'restaurant-name':
        i = 0;
        break;
      case 'home':
        i = 0;
        break;
      case 'about':
        i = 1;
        break;
      case 'menu':
        i = 2;
        break;
      case 'contact':
        i = 3;
        break;
      default:
        break;
    }
    document.getElementById('content').appendChild(component());
}
/* function with tab key to change page
function switchPage(event){
  if(event.keyCode === 9){
      if(i===3){
        i=0;
      }
      else{
        i++;
      }
      document.getElementById('content').appendChild(component());
    }
}*/

document.getElementById('content').appendChild(component());
document.addEventListener('click', clickPage);
//document.addEventListener('keydown', switchPage);