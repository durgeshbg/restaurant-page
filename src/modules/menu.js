import data from '../assets/menu.json';
export default function menu() {
    const header = document.querySelector('.tab-header');
    const description = document.querySelector('.tab-description');
    const menu = document.createElement('div');

    header.textContent = 'Our Menu';
    menu.classList.add('menu');

    for (let section in data) {
        let div = document.createElement('div');
        div.classList.add('section');
        div.innerHTML = `<h3>${section}</h3>`;
        data[section].forEach((dish) => {
            div.innerHTML += `<div class='dish'>
                    <p class='name'>${dish[0]}</p>
                    <p class='price'> &#8377; ${dish[1]}</p>
                </div>`;
        });
        menu.appendChild(div);
    }
    description.innerHTML = '';
    description.appendChild(menu);
}
