function buildHome() {
    const home = document.createElement('home');
    home.classList.add('home');

    const restText = document.createElement('div');
    restText.classList.add('rest-text');

    const restaurantDescription = document.createElement('h4');
    restaurantDescription.classList.add('description');
    restaurantDescription.textContent = 'Number one pizza in the world';

    const restaurantPara = document.createElement('p');
    restaurantPara.classList.add('para');
    restaurantPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut turpis eros. Donec molestie sit amet mi in efficitur. Pellentesque sed scelerisque sapien. Curabitur enim augue, maximus non risus at, consequat efficitur ante. Maecenas tincidunt libero tempus, porta enim at, ornare lectus. Pellentesque vestibulum lobortis elit sed maximus.';

    const orderNow = document.createElement('p');
    orderNow.classList.add('order');
    orderNow.textContent = 'Order Now!'

    const pizzaImg = document.createElement('img');
    pizzaImg.src = 'images/pizza.jpg';
    pizzaImg.alt = 'Pizza';

    restText.appendChild(restaurantDescription);
    restText.appendChild(restaurantPara);
    restText.appendChild(orderNow);
    home.appendChild(restText);
    home.appendChild(pizzaImg);

    return home;
}

function loadHome() {
    const mainContent = document.getElementById('main-content')
    mainContent.textContent = ''
    mainContent.appendChild(buildHome())
  }

export default loadHome;