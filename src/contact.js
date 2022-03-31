
export default function contact(){
    const main = document.createElement('div');
    main.id = 'main';

    const contactTitle = document.createElement('h1');
    contactTitle.id = 'contact-title';
    contactTitle.innerHTML = 'How To Contact Us';
    main.appendChild(contactTitle);

    const contactPara = document.createElement('p');
    contactPara.id = 'contact-para';
    contactPara.innerHTML = 'Please fill in this form to send us your request';
    main.appendChild(contactPara);

    const contactForm = document.createElement('div');
    contactForm.id = 'contact-form';
    main.appendChild(contactForm);

    const objectLabel = document.createElement('label');
    objectLabel.htmlFor = 'object';
    objectLabel.innerHTML = 'Object';
    contactForm.appendChild(objectLabel);

    const objectInput = document.createElement('input');
    objectInput.id = 'object';
    objectInput.type = 'text';
    objectInput.name = 'object';
    objectInput.placeholder = 'Type an object...';
    objectInput.value = '';
    contactForm.appendChild(objectInput);

    const messageLabel = document.createElement('label');
    messageLabel.htmlFor = 'message';
    messageLabel.innerHTML = 'Your Message';
    contactForm.appendChild(messageLabel);

    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.name = 'message';
    messageInput.value = '';
    messageInput.placeholder = 'Type a message...';
    contactForm.appendChild(messageInput);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submit';
    submitBtn.innerHTML = 'Submit Message';
    contactForm.appendChild(submitBtn);

    return main;
}