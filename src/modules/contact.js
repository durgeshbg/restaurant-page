import image from '../assets/contact.png';

const data = [
    {
        name: 'John',
        positon: 'Owner',
        phone: '+91 52671 78211',
    },
    {
        name: 'Rupert',
        positon: 'Manger',
        phone: '+91 78122 87321',
    },
    {
        name: 'Loius',
        positon: 'Waiter',
        phone: '+91 67483 12213',
    },
    {
        name: 'Meggan',
        positon: 'Chef',
        phone: '+91 23133 32472',
    },
];

export default function contact() {
    const header = document.querySelector('.tab-header');
    const description = document.querySelector('.tab-description');

    header.textContent = 'Contact Us';
    description.innerHTML = '';
    data.forEach((item) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML += `<p class="name">${item.name}</p>`;
        card.innerHTML += `<p class="positon">${item.positon}</p>`;
        card.innerHTML += `<p class="phone">${item.phone}</p>`;
        card.innerHTML += `<img src=${image} alt="contact">`;
        description.appendChild(card);
    });
}
