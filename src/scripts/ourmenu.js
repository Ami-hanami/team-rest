
import createHeader from './header.js';
createHeader();


import "../style/ourmenu.css";

// // header

// import "../style/index.css";

// const header = document.createElement('header');

// const ul = document.createElement('ul');
// ul.classList.add('nav-list');

// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');

// const linkWelcome = document.createElement('a');
// linkWelcome.classList.add('list-item');
// linkWelcome.textContent = 'Welcome';
// linkWelcome.setAttribute('href', '../index.html');

// const linkMenu = document.createElement('a');
// linkMenu.classList.add('list-item');
// linkMenu.textContent = 'Our Menu';
// linkMenu.setAttribute('href', '../ourmenu.html');

// const linkContact = document.createElement('a');
// linkContact.classList.add('list-item');
// linkContact.textContent = 'Contact';
// linkContact.setAttribute('href', '../contact.html');

// import logoSrc from '../icons/logo.png';
// const logo = document.createElement('img');
// logo.classList.add('logo');
// logo.setAttribute('alt', 'logo-icon');
// logo.setAttribute('src', logoSrc);

// const serviceCont = document.createElement('div');
// serviceCont.classList.add('service-container');

// import cartIcon from '../icons/shopping-cart.svg';
// const cart = document.createElement('img');
// cart.classList.add('cart');
// cart.setAttribute('alt', 'basket');
// cart.setAttribute('src', cartIcon);

// import searchIcon from '../icons/Search-icon.svg';
// const search = document.createElement('img');
// search.classList.add('search');
// search.setAttribute('alt', 'magnifying glass');
// search.setAttribute('src', searchIcon);

// const memberBtn = document.createElement('button');
// memberBtn.classList.add('member-btn');
// memberBtn.textContent = 'Become a Member';

// document.body.appendChild(header);

// header.appendChild(ul);
// header.appendChild(logo);
// header.appendChild(serviceCont);

// ul.appendChild(li1);
// li1.appendChild(linkWelcome);

// ul.appendChild(li2);
// li2.appendChild(linkMenu);

// ul.appendChild(li3);
// li3.appendChild(linkContact);

// serviceCont.appendChild(cart);
// serviceCont.appendChild(search);
// serviceCont.appendChild(memberBtn);

// const burgermenu = document.createElement ('button');
// burgermenu.classList.add('burgermenu');
// burgermenu.innerHTML = '&#9776;'

// header.appendChild(burgermenu);

// burgermenu.addEventListener('click', () => {
//     ul.classList.toggle('active');
// });

// menu

const myMenu = [];

const mainMenu = document.createElement('main');
mainMenu.classList.add('main-ourmenu');

const h2Menu = document.createElement('h2');
h2Menu.classList.add('ourmenu-title');
h2Menu.textContent = 'Our Best & Delicious Menu';

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

function Menu (name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

const menu1 = new Menu('Naan Burger', 'Juicy grilled patty, fresh veggies, and sauces in warm naan bread.', '$1.85');
const menu2 = new Menu('Butter Chicken Taco', 'Tender chicken in creamy butter sauce, wrapped in a soft taco shell.', '$1.15');
const menu3 = new Menu('Chicken Burger', 'Crispy chicken patty, fresh lettuce, tomato, and savory sauce in a soft bun.', '$2.00');
const menu4 = new Menu('Cheese Chicken Naan','Juicy chicken, melted cheese, and flavorful spices wrapped in warm, soft naan bread.', '$2.50');
const menu5 = new Menu('3 Layer Burger', 'Three juicy beef patties, fresh veggies, cheese, and creamy sauce in a hearty bun.', '$4.99');
const menu6 = new Menu('Sandwich', 'Fresh bread filled with your choice of meats, cheese, veggies, and tasty condiments.', '$2.80');

myMenu.push(menu1, menu2, menu3, menu4, menu5, menu6);

myMenu.forEach((item, index) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.setAttribute('id', `item-${index + 1}`);

    const itemImg = document.createElement('img');
    itemImg.classList.add('menu-image');
    itemImg.setAttribute('src', importImg(index + 1));

    const itemName = document.createElement('p');
    itemName.classList.add('menu-name');
    itemName.textContent = item.name;

    const itemDesc = document.createElement('p');
    itemDesc.classList.add('menu-description');
    itemDesc.textContent = item.description;

    const itemPriceBlock = document.createElement('div');
    itemPriceBlock.classList.add('price-block');

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('menu-price');
    itemPrice.textContent = item.price;

    const itemBasket = document.createElement('img');
    itemBasket.classList.add('basket-icon');
    itemBasket.setAttribute('src', require('../icons/basket-btn.svg'));

    itemPriceBlock.appendChild(itemPrice);
    itemPriceBlock.appendChild(itemBasket);

    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDesc);
    menuItem.appendChild(itemPriceBlock);
    menuContainer.appendChild(menuItem);
});

function importImg(itemPosition) {
    const itemImgSrc = require(`../icons/item-${itemPosition}.png`);
    return itemImgSrc;
}

mainMenu.appendChild(h2Menu);
mainMenu.appendChild(menuContainer);
document.body.appendChild(mainMenu);
