import './style.css';
import load from './modules/load';
import home from './modules/home';
import contact from './modules/contact';
import menu from './modules/menu';

function init() {
    load();
    home();
    contact();
    menu();
}
init();
