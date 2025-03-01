
const header = document.createElement('header');

const ul = document.createElement('ul');
ul.classList.add('nav-list');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

const linkWelcome = document.createElement('a');
linkWelcome.classList.add('list-item');
linkWelcome.textContent = 'Welcome';
linkWelcome.setAttribute('href', '../index.html');

const linkMenu = document.createElement('a');
linkMenu.classList.add('list-item');
linkMenu.textContent = 'Our Menu';
linkMenu.setAttribute('href', '../ourmenu.html');

const linkContact = document.createElement('a');
linkContact.classList.add('list-item');
linkContact.textContent = 'Contact';
linkContact.setAttribute('href', '../contact.html');

import logoSrc from '../icons/logo.png';
const logo = document.createElement('img');
logo.classList.add('logo');
logo.setAttribute('alt', 'logo-icon');
logo.setAttribute('src', logoSrc);

const serviceCont = document.createElement('div');
serviceCont.classList.add('service-container');

import cartIcon from '../icons/shopping-cart.svg';
const cart = document.createElement('img');
cart.classList.add('cart');
cart.setAttribute('alt', 'basket');
cart.setAttribute('src', cartIcon);

import searchIcon from '../icons/Search-icon.svg';
const search = document.createElement('img');
search.classList.add('search');
search.setAttribute('alt', 'magnifying glass');
search.setAttribute('src', searchIcon);

const memberBtn = document.createElement('button');
memberBtn.classList.add('member-btn');
memberBtn.textContent = 'Become a Member';

document.body.appendChild(header);

header.appendChild(ul);
header.appendChild(logo);
header.appendChild(serviceCont);

ul.appendChild(li1);
li1.appendChild(linkWelcome);

ul.appendChild(li2);
li2.appendChild(linkMenu);

ul.appendChild(li3);
li3.appendChild(linkContact);

serviceCont.appendChild(cart);
serviceCont.appendChild(search);
serviceCont.appendChild(memberBtn);

const container = document.createElement('div');
container.classList.add('container');

const h1 = document.createElement('h1');
h1.textContent = 'Welcome! We Made Delicious Food for You';
container.appendChild(h1);
h1.classList.add('h1');

const p = document.createElement('p');
p.textContent = 'only we have the most delicious burgers and drinks and much more delicious things!';
container.appendChild(p);
p.classList.add('p');

const button = document.createElement('button');
button.textContent = 'Order Online';
container.appendChild(button);
button.classList.add('button');

document.body.appendChild(container);


const burgermenu = document.createElement ('button');
burgermenu.classList.add('burgermenu');
burgermenu.innerHTML = '&#9776;'

header.appendChild(burgermenu);

burgermenu.addEventListener('click', () => {
    ul.classList.toggle('active');
});
