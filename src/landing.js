import buildHome from './home';
import buildContact from './contact';

function buildHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('resaurant-name');
    restaurantName.textContent = 'Il Pizzavendolo';

    header.appendChild(restaurantName);
    
    return header;
}
function buildContent() {
    const mainContent = document.createElement('main-content');
    mainContent.classList.add('main-content');

    // mainContent.appendChild(buildHome());
    mainContent.appendChild(buildContact());

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
    content.appendChild(buildContent());
    content.appendChild(buildFooter());
}

export default buildLanding;