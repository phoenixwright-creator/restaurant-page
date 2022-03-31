
import Crepe from './crepe.jpg';

export default function home() {
    const main = document.createElement('div');
    main.id = 'main';

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