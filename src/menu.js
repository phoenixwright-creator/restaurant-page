import Logo from './la-cabeza-logo.png';

export default function menu(){
    const main = document.createElement('div');
    main.id = 'main';

    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo-space';
  
    const logoImg = new Image();
    logoImg.alt = 'Logo of the restaurant';
    logoImg.id = 'restaurant-logo';
    logoImg.src = Logo;
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

    const menuTable = document.createElement('table');
    menuTable.id = 'crep-table';
    main.appendChild(menuTable);
    const defautRow = document.createElement('tr');
    defautRow.id = 'default-row';
    const defaultName = document.createElement('td');
    defaultName.innerHTML = 'Name';
    const defaultPrice = document.createElement('td');
    defaultPrice.innerHTML = 'Price (in €)';
    defautRow.appendChild(defaultName);
    defautRow.appendChild(defaultPrice);
    menuTable.appendChild(defautRow);

    for(let i=0; i<5; i++){
        const tableRow = document.createElement('tr');
        const crepName = document.createElement('td');
        crepName.innerHTML = 'Crepe ' + (i+1);
        tableRow.appendChild(crepName);
        const crepPrice = document.createElement('td');
        crepPrice.innerHTML = '10.00 €';
        tableRow.appendChild(crepPrice);
        menuTable.appendChild(tableRow);
    }

    return main;
}