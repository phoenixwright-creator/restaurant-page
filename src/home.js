import Logo from './la-cabeza-logo.png';
import Crepe from './crepe.jpg';

export default function home() {
    const main = document.createElement('div');
    main.id = 'main';

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
  
    const mainImg = new Image();
    mainImg.id = 'main-img';
    mainImg.alt = 'Image of the main meal';
    mainImg.src = Crepe;
    main.appendChild(mainImg);
  
    const descPara = document.createElement('h2');
    descPara.id = 'description';
    descPara.innerHTML = `Hello, welcome to the restaurant La Cabeza ! <br><br>
                          Here, you will find the most popular meal from Paris that will turn your head crazy : <br><br>
                          The <em>Crèpe Jambon-Oeuf-Fromage</em> ! <br><br>
                          Don't hesitate to check our menu in the above links and contact us by mail or phone if you want to order something !`;
  
    main.appendChild(descPara);

    return main;
}