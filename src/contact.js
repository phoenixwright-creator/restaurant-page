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

    const contactTitle = document.createElement('h1');
    contactTitle.id = 'contact-title';
    contactTitle.innerHTML = 'How To Contact Us';
    main.appendChild(contactTitle);

    const contactPara = document.createElement('p');
    contactPara.id = 'contact-para';
    contactPara.innerHTML = 'Please fill in this form to send us your request';
    main.appendChild(contactPara);

    const contactForm = document.createElement('form');
    contactForm.id = 'contact-form';
    //contactForm.method = '';
    //contactForm.action = '';
    main.appendChild(contactForm);

    const objectLabel = document.createElement('label');
    objectLabel.htmlFor = 'object';
    objectLabel.innerHTML = 'Object';
    contactForm.appendChild(objectLabel);

    const objectInput = document.createElement('input');
    objectInput.type = 'text';
    objectInput.id = 'object';
    objectInput.placeholder = 'Type the object of your message...';
    contactForm.appendChild(objectInput);

    const messageLabel = document.createElement('label');
    messageLabel.htmlFor = 'message';
    messageLabel.innerHTML = 'Your Message';
    contactForm.appendChild(messageLabel);

    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.placeholder = 'Type your message...';
    contactForm.appendChild(messageInput);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submit-message';
    submitBtn.innerHTML = 'Submit Message';
    contactForm.appendChild(submitBtn);

    return main;
}