import loadHome from './home';
import loadContact from './contact';
import loadMenu from './menu';

function buildHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('resaurant-name');
    restaurantName.textContent = 'Il Pizzavendolo';

    header.appendChild(restaurantName);
    
    return header;
}

function buildNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-btn');
    homeButton.textContent = 'Home';
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setButtonState(homeButton);
        loadHome();
      });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-btn');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setButtonState(menuButton);
        loadMenu();
      });

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-btn');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setButtonState(contactButton);
        console.log('hello');
        loadContact();
      });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setButtonState(button) {
    const buttons = document.querySelectorAll(".nav-btn");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

function buildContent(tab) {
    const mainContent = document.createElement('main-content');
    mainContent.classList.add('main-content');
    mainContent.setAttribute('id', 'main-content');

    return mainContent;
}

function buildFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const madeBy = document.createElement('h5');
    madeBy.classList.add('made-by')
    madeBy.textContent = 'Made by Dzaki';

    footer.appendChild(madeBy);

    return footer;
}

function buildLanding() {
    const content = document.getElementById('content');

    content.appendChild(buildHeader());
    content.appendChild(buildNav());
    content.appendChild(buildContent());
    content.appendChild(buildFooter());

    loadHome();
}

export default buildLanding;