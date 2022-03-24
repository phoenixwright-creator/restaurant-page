export default function menu(){
    const main = document.createElement('div');
    main.id = 'main';

    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo-space';
  
    const logoImg = document.createElement('img');
    logoImg.alt = 'Logo of the restaurant';
    logoImg.id = 'restaurant-logo';
    logoImg.src = '../src/la-cabeza-logo.png';
    logoDiv.appendChild(logoImg);
  
    const restaurantName = document.createElement('h1');
    restaurantName.id = 'restaurant-name';
    restaurantName.innerHTML = 'LA CABEZA';
    logoDiv.appendChild(restaurantName);
  
    main.appendChild(logoDiv);
    
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
  
    main.appendChild(headerLinks);

    const menuTitle = document.createElement('h1');
    menuTitle.id = 'menu-title';
    menuTitle.innerHTML = 'Our Menu';
    main.appendChild(menuTitle);

    return main;
}