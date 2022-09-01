function buildContact() {
    const contact = document.createElement('contact');
    contact.classList.add('contact');

    const address = document.createElement('p');
    address.textContent = 'Address: Piazza Municipio (Palazzo San Giacomo) - 80133 Napoli';
    
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Number: (555) 555-5555';

    const map = document.createElement('iframe');
    map.classList.add('map');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.437440906392!2d14.248281551295367!3d40.84031873759018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09baabc9fbed%3A0xd534f1f883b8545a!2sPalazzo%20San%20Giacomo!5e0!3m2!1sen!2sca!4v1661994190967!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

    contact.appendChild(address);
    contact.appendChild(phoneNumber);
    contact.appendChild(map);
    
    return contact;
}

export default buildContact;