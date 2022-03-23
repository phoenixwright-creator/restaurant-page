export default function about(){
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

    const title = document.createElement('h1');
    title.id = 'about-title';
    title.innerHTML = 'About Us';
    main.appendChild(title);

    const mainImg = document.createElement('img');
    mainImg.id = 'cooker-img';
    mainImg.alt = 'Image of a cook member cooking creps';
    mainImg.src = '../src/cooker.jpg';
    main.appendChild(mainImg);

    const para = document.createElement('p');
    para.id = 'about-para';
    para.innerHTML = `We are <b>La Cabeza Family</b>, since 2004.<br><br>
                We want to expand the French cooking culture abroad,
                and one of our favourite meal is the classic <em>Crêpe Jambon-Oeuf-Fromage</em>.<br>
                We have been eating it once per week since our childhood, 
                we are absolute lovers of this typical parisian food that can be consumed 
                in any situation, alone or in company, at home or outside.<br><br>
                <h2>Just try it and let us know how you liked it !</h2>`;

    main.appendChild(para);

    return main;
}