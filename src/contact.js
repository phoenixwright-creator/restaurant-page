export default function contact(){
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
  
    const aboutLink = document.createElement('a');
    aboutLink.href = '#';
    aboutLink.rel = 'noopener noreferrer';
    aboutLink.id = 'about';
    aboutLink.innerHTML = 'About';
    headerLinks.appendChild(aboutLink);
  
    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.rel = 'noopener noreferrer';
    menuLink.id = 'menu';
    menuLink.innerHTML = 'Menu';
    headerLinks.appendChild(menuLink);
  
    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.rel = 'noopener noreferrer';
    contactLink.id = 'contact';
    contactLink.innerHTML = 'Contact Us';
    headerLinks.appendChild(contactLink);
  
    main.appendChild(headerLinks);

    return main;
}