export default function home() {
    const content = document.querySelector('#content');
    const header = document.createElement('h2');
    const description = document.createElement('div');
    header.textContent = 'Home';
    description.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
        Tenetur distinctio rem cum animi, minima, \
        facilis delectus earum sint inventore totam dolor autem. \
        Asperiores nemo porro quibusdam totam inventore! \
        Libero, consectetur?';

    content.appendChild(header);
    content.appendChild(description);
}
