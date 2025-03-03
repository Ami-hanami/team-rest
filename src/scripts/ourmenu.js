

import createHeader from './header.js';
createHeader();


import "../style/ourmenu.css";


const myMenu = [];
const myOrder = [];

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
    itemImg.setAttribute('height', '200px');

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

    const itemAmountContainer = document.createElement('div');
    itemAmountContainer.classList.add('price-block__amount-container');

    const itemAmount = document.createElement('input');
    itemAmount.classList.add('price-block__amount');
    itemAmount.setAttribute('type', 'number');
    itemAmount.setAttribute('value', '0');
    itemAmount.setAttribute('max', '50'); // не работает ??
    itemAmount.setAttribute('onkeydown', 'return false');

    const itemAmountDecrease = document.createElement('button');
    itemAmountDecrease.classList.add('price-block__amount-btn-decrease');
    itemAmountDecrease.textContent = '-';
    itemAmountDecrease.addEventListener('click', () => {
        if (itemAmount.value > 0) {
            itemAmount.value--;
        }
    });

    const itemAmountIncrease = document.createElement('button');
    itemAmountIncrease.classList.add('price-block__amount-btn-increase');
    itemAmountIncrease.textContent = '+';
    itemAmountIncrease.addEventListener('click', () => {
        itemAmount.value++;
    });

    const itemAmountBtns = document.createElement('div');
    itemAmountBtns.classList.add('price-block__amount-btns');

    // itemAmountContainer.appendChild(itemAmountDecrease);
    // itemAmountContainer.appendChild(itemAmount);
    // itemAmountContainer.appendChild(itemAmountIncrease);

    itemAmountBtns.appendChild(itemAmountDecrease);
    itemAmountBtns.appendChild(itemAmount);
    itemAmountBtns.appendChild(itemAmountIncrease);

    itemAmountContainer.appendChild(itemAmountBtns);

    const itemBasketBtn = document.createElement('button');
    itemBasketBtn.classList.add('basket-btn');
//     const basketIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
//     <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
//     <path d="M11.6667 11.6667H13.1168C14.0168 11.6667 14.7251 12.4417 14.6501 13.3334L13.9584 21.6334C13.8417 22.9917 14.9167 24.1584 16.2834 24.1584H25.1584C26.3584 24.1584 27.4084 23.1751 27.5001 21.9834L27.9501 15.7334C28.0501 14.3501 27.0001 13.2251 25.6084 13.2251H14.8501" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M23.5417 28.3333C24.117 28.3333 24.5833 27.867 24.5833 27.2917C24.5833 26.7164 24.117 26.25 23.5417 26.25C22.9664 26.25 22.5 26.7164 22.5 27.2917C22.5 27.867 22.9664 28.3333 23.5417 28.3333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M16.8749 28.3333C17.4502 28.3333 17.9166 27.867 17.9166 27.2917C17.9166 26.7164 17.4502 26.25 16.8749 26.25C16.2996 26.25 15.8333 26.7164 15.8333 27.2917C15.8333 27.867 16.2996 28.3333 16.8749 28.3333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M17.5 16.6667H27.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//     </svg>`;
//    basketIconSvg.setAttribute('fill', 'black');
    


//     itemBasketBtn.innerHTML = basketIconSvg;

    itemBasketBtn.addEventListener('click', () => {
        const itemAmountValue = itemAmount.value;
        if (itemAmountValue > 0) {
            addBasketItem(item.name, itemAmountValue, item.price);
        }
    });

    const itemBasket = document.createElement('img');
    itemBasket.classList.add('basket-icon');
    itemBasket.setAttribute('src', require('../icons/basket-btn.svg'));
    // const itemBasket = document.createElement('svg');
    // itemBasket.classList.add('basket-icon');
    // itemBasket.setAttribute('xlmns', 'http://www.w3.org/2000/svg');
    itemBasketBtn.appendChild(itemBasket);

    itemAmountContainer.appendChild(itemBasketBtn);

    itemPriceBlock.appendChild(itemPrice);
    itemPriceBlock.appendChild(itemAmountContainer);
    // itemPriceBlock.appendChild(itemBasketBtn);

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

function addBasketItem(name, value, price) {
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');

    const orderItemBlock = document.createElement('div');
    orderItemBlock.classList.add('order-item__block');

    const orderItemName = document.createElement('p');
    orderItemName.classList.add('order-item__name');
    orderItemName.textContent = name;

    const orderItemPrice = document.createElement('p');
    orderItemPrice.classList.add('order-item__price');
    orderItemPrice.textContent = price;

    orderItemBlock.appendChild(orderItemName);
    orderItemBlock.appendChild(orderItemPrice);

    const orderItemAmount = document.createElement('p');
    orderItemAmount.classList.add('oder-item__amount');
    orderItemAmount.textContent = value;
    
    const orderItemRemove = document.createElement('button');
    orderItemRemove.classList.add('order-item__remove');
    orderItemRemove.textContent = 'Remove';
    orderItemRemove.addEventListener('click', () => {
        orderItem.remove();
    });

    orderItem.appendChild(orderItemBlock);
    orderItem.appendChild(orderItemAmount);
    orderItem.appendChild(orderItemRemove);

    // myOrder.push(orderItem);
    // console.log(myOrder);
}