export default function menu(){
    const main = document.createElement('div');
    main.id = 'main';

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