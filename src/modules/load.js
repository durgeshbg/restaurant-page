export default function load() {
    const content = document.querySelector('#content');
    const head = document.createElement('h1');
    const nav = document.createElement('ul');

    const header = document.createElement('h2');
    const description = document.createElement('div');
    
    header.classList.add('tabHeader');
    description.classList.add('tabDescription');

    head.textContent = 'Biriyani Club';
    ['home', 'menu', 'contact'].forEach((link) => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="#" class=${link}>${link.toUpperCase()}</a>`;
        nav.appendChild(li);
    });

    content.appendChild(head);
    content.appendChild(nav);
    content.appendChild(header);
    content.appendChild(description);
}
