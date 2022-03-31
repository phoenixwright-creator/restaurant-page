import './style.css';
import home from './home.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';
import Logo from './la-cabeza-logo.png';

const restaurantPages = [home(), about(), menu(), contact()];
let i = 0;

function component() {
  const content = document.getElementById('content');
    while(content.firstChild){
      content.removeChild(content.firstChild);
    }
    const header = document.createElement('header');
    header.id = 'header';
    content.appendChild(header);

    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo-space';
  
    const myLogo = new Image();
    myLogo.alt = 'Logo of the restaurant';
    myLogo.id = 'restaurant-logo';
    myLogo.src = Logo;
    logoDiv.appendChild(myLogo);
  
    const restaurantName = document.createElement('h1');
    restaurantName.id = 'restaurant-name';
    restaurantName.innerHTML = 'LA CABEZA';
    logoDiv.appendChild(restaurantName);
  
    header.appendChild(logoDiv);
    
    const headerLinks = document.createElement('div');
    headerLinks.id = 'header-links';

    const homeLink = document.createElement('a');
    homeLink.rel = 'noopener noreferrer';
    homeLink.id = 'home';
    homeLink.innerHTML = 'HOME';
    headerLinks.appendChild(homeLink);
  
    const aboutLink = document.createElement('a');
    aboutLink.rel = 'noopener noreferrer';
    aboutLink.id = 'about';
    aboutLink.innerHTML = 'ABOUT';
    headerLinks.appendChild(aboutLink);
  
    const menuLink = document.createElement('a');
    menuLink.rel = 'noopener noreferrer';
    menuLink.id = 'menu';
    menuLink.innerHTML = 'MENU';
    headerLinks.appendChild(menuLink);
  
    const contactLink = document.createElement('a');
    contactLink.rel = 'noopener noreferrer';
    contactLink.id = 'contact';
    contactLink.innerHTML = 'CONTACT US';
    headerLinks.appendChild(contactLink);
  
    header.appendChild(headerLinks);

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
    }
    document.getElementById('content').appendChild(component());
}


document.getElementById('content').appendChild(component());
document.addEventListener('click', clickPage);
//document.addEventListener('keydown', switchPage);