function buildMenu() {
    const menu = document.createElement('menu');
    menu.classList.add('menu');

    const margheritaImg = document.createElement('img');
    margheritaImg.src = 'images/Margherita.jpg';
    margheritaImg.alt = 'Margherita';

    const cheeseImg = document.createElement('img');
    cheeseImg.src = 'images/Cheese.jpg';
    cheeseImg.alt = 'Cheese';

    const pepperoniImg = document.createElement('img');
    pepperoniImg.src = 'images/Pepperoni.jpg';
    pepperoniImg.alt = 'Pepperoni';

    const veggieImg = document.createElement('img');
    veggieImg.src = 'images/Veggie.jpg';
    veggieImg.alt = 'Veggetarian';

    menu.appendChild(margheritaImg);
    menu.appendChild(cheeseImg);
    menu.appendChild(pepperoniImg);
    menu.appendChild(veggieImg);

    return menu;
}

function loadMenu() {
    const mainContent = document.getElementById('main-content')
    mainContent.textContent = ''
    mainContent.appendChild(buildMenu())
  }

export default loadMenu;