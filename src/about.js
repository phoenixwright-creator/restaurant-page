import Cooker from './cooker.jpg';
import Logo2 from './la-cabeza-logo.png';

export default function about(){
    const main = document.createElement('div');
    main.id = 'main';

    const title = document.createElement('h1');
    title.id = 'about-title';
    title.innerHTML = 'About Us';
    main.appendChild(title);

    const mainImg = new Image();
    mainImg.id = 'cooker-img';
    mainImg.alt = 'Image of a cook member cooking creps';
    mainImg.src = Cooker;
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