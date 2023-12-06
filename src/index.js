import './style.css';
import load from './modules/load';
import home from './modules/home';
import contact from './modules/contact';
import menu from './modules/menu';

function init() {
    load();
    home();
    addListeners();
}

function addListeners() {
    document.querySelector('.home').addEventListener('click', home);
    document.querySelector('.contact').addEventListener('click', contact);
    document.querySelector('.menu').addEventListener('click', menu);
}

init();
