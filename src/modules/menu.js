const data = {
    'I. Signature Biryani Offerings': [
        ['Hyderabadi Nawabi Biryani', 234],
        ['Lucknawi Tehzeeb Biryani', 345],
        ['Vegetarian Delight Dum Biryani', 564],
    ],
    "II. Chef's Recommendations": [
        ["Chef's Special Dum Gosht Biryani", 673],
        ['Subz-E-Bahar: Royal Vegetable Biryani', 345],
    ],
    'III. Biryani Accompaniments': [
        ['Raita-e-Khas', 344],
        ['Mirch Ka Salan', 566],
    ],
    'IV. Breads & Sides': [
        ['Warqi Paratha', 434],
        ['Paneer Tikka', 342],
    ],
    'V. Dessert Delights': [
        ['Shahi Tukda', 234],
        ['Phirni', 656],
    ],
    'VI. Beverages': [
        ['Saffron-infused Lassi', 78],
        ['Mango Mastani.', 45],
    ],
};

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
