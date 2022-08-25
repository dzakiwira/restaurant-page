import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    const divid = document.getElementById('content');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    divid.innerHTML = 'restaurant';

    return divid;
  }
  
  document.body.appendChild(component());