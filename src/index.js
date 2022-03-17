function component() {
  const main = document.createElement('div');
  main.id = 'main';

  const logoDiv = document.createElement('div');
  logoDiv.id = 'logo-space';

  const logoImg = document.createElement('img');
  logoImg.alt = 'Logo of the restaurant';
  logoImg.id = 'restaurant-logo';
  logoImg.src = '../src/la-cabeza-logo.png';
  logoImg.style.height = '100px';
  logoImg.style.width = 'auto';
  logoDiv.appendChild(logoImg);

  const restaurantName = document.createElement('p');
  restaurantName.id = 'restaurant-name';
  restaurantName.innerHTML = 'La Cabeza';
  logoDiv.appendChild(restaurantName);

  main.appendChild(logoDiv);
  
  const headerLinks = document.createElement('div');
  headerLinks.id = 'header-links';

  const aboutLink = document.createElement('a');
  aboutLink.target = '_blank';
  aboutLink.href = '#';
  aboutLink.rel = 'noopener noreferrer';
  aboutLink.id = 'about';
  aboutLink.innerHTML = 'About';
  headerLinks.appendChild(aboutLink);

  const menuLink = document.createElement('a');
  menuLink.target = '_blank';
  menuLink.href = '#';
  menuLink.rel = 'noopener noreferrer';
  menuLink.id = 'menu';
  menuLink.innerHTML = 'Menu';
  headerLinks.appendChild(menuLink);

  const contactLink = document.createElement('a');
  contactLink.target = '_blank';
  contactLink.href = '#';
  contactLink.rel = 'noopener noreferrer';
  contactLink.id = 'contact';
  contactLink.innerHTML = 'Contact Us';
  headerLinks.appendChild(contactLink);

  main.appendChild(headerLinks);

  const mainImg = document.createElement('img');
  mainImg.id = 'main-img';
  mainImg.alt = 'Image of the main meal';
  mainImg.src = '../src/crepe.jpg';
  mainImg.style.height = '400px';
  mainImg.style.width = 'auto';
  main.appendChild(mainImg);

  const descPara = document.createElement('p');
  descPara.id = 'description';
  descPara.innerHTML = `Hello, welcome to the restaurant La Cabeza ! <br><br>
                        Here, you will find the most popular meal from Paris that will turn your head crazy : <br><br>
                        The <em>Crèpe Jambon-Oeuf-Fromage</em> ! <br><br>
                        Don't hesitate to check our menu in the above links and contact us by mail or phone if you want to order something !`;

  main.appendChild(descPara);

  return main;
}

document.getElementById('content').appendChild(component());
