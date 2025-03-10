import "../style/ourmenu.css";

import createHeader, { updateBasketBtnDisplay } from './header.js';

const myMenu = [];
export const myOrder = [];


function basketBtnClick() {
    if (myOrder.length > 0) {
        orderItemContainer.classList.toggle('active'); 
    }
    else
    alert('Add some positions to your order!');
}

createHeader(basketBtnClick);

const mainMenu = document.createElement('main');
mainMenu.classList.add('main-ourmenu');

const h2Menu = document.createElement('h2');
h2Menu.classList.add('ourmenu-title');
h2Menu.textContent = 'Our Best & Delicious Menu';

// кнопки фильтрации
const menuFilterBtns = document.createElement('div');
menuFilterBtns.classList.add('menu-filter-btns');

const allMenuBtn = document.createElement('button');
allMenuBtn.classList.add('all-menu-btn');
allMenuBtn.textContent = 'All';

allMenuBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(item => item.style.display = 'flex');
    // document.querySelector('.see-all-btn').style.display = 'block';
})

const basicMenuBtn = document.createElement('button');
basicMenuBtn.classList.add('basic-menu-btn');
basicMenuBtn.textContent = 'Burgers';

basicMenuBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(item => chooseMenu('basic-menu', item));
})

const dessertsBtn = document.createElement('button');
dessertsBtn.classList.add('desserts-btn');
dessertsBtn.textContent = 'Desserts';

dessertsBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(item => chooseMenu('desserts-menu', item));
})

const drinksBtn = document.createElement('button');
drinksBtn.classList.add('drinks-btn');
drinksBtn.textContent = 'Drinks';

drinksBtn.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(item => chooseMenu('drinks-menu', item));
})

function chooseMenu(menuClass, item) {
    if (item.classList.contains(menuClass)) {
        item.style.display = 'flex'; 
        item.style.opacity = '1';
        item.style.transform = 'translateY(0px)';
    } else {
        item.style.display = 'none'; 
    }
}

menuFilterBtns.appendChild(allMenuBtn);
menuFilterBtns.appendChild(basicMenuBtn);
menuFilterBtns.appendChild(dessertsBtn);
menuFilterBtns.appendChild(drinksBtn);

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

const seeAllBtn= document.createElement('button');
seeAllBtn.classList.add('see-all-btn');
seeAllBtn.textContent = 'See All';

seeAllBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('see-all-cards');
    if (menuContainer.classList.contains('see-all-cards')) {
        seeAllBtn.textContent = 'Hide';
    }
    else seeAllBtn.textContent = 'See All';
})


function Menu (name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

const basicMenu = [
    new Menu('Naan Burger', 'Juicy grilled patty, fresh veggies, and sauces in warm naan bread.', '$1.85'),
    new Menu('Butter Chicken Taco', 'Tender chicken in creamy butter sauce, wrapped in a soft taco shell.', '$1.15'),
    new Menu('Chicken Burger', 'Crispy chicken patty, fresh lettuce, tomato, and savory sauce in a soft bun.', '$2.00'),
    new Menu('Cheese Chicken Naan','Juicy chicken, melted cheese, and flavorful spices wrapped in warm, soft naan bread.', '$2.50'),
    new Menu('3 Layer Burger', 'Three juicy beef patties, fresh veggies, cheese, and creamy sauce in a hearty bun.', '$4.99'),
    new Menu('Sandwich', 'Fresh bread filled with your choice of meats, cheese, veggies, and tasty condiments.', '$2.80'),
]

const dessertsMenu = [
    new Menu('Oreo Cheescake', 'A rich and creamy cheesecake with a crunchy Oreo cookie crust, topped with Oreo crumbs.', '$0.95'),
    new Menu('Apple Pie', 'A warm apple pie with a buttery, flaky crust, filled with sweet apples.', '$1.05'),
    new Menu('Choco Muffin', 'A soft and fluffy muffin packed with rich chocolate chips, perfect for a sweet treat.', '$0.70'),
    new Menu('Triffle Dessert','A layered dessert with sponge cake, creamy custard, fresh fruit, and whipped cream.', '$1.20'),
]

const drinksMenu = [
    new Menu('Iced Caramel Coffee', 'A refreshing iced coffee with rich caramel syrup, topped with whipped cream for a sweet, indulgent treat.', '$1.00'),
    new Menu('Frappe with nuts', 'A creamy frappe blended with ice, topped with crushed nuts for a crunchy, flavorful twist.', '$0.95'),
    new Menu('Iced Macchiato', 'A refreshing espresso-based drink with chilled milk and a touch of caramel, served over ice.', '$1.10'),
    new Menu('Milkshake with juice', 'A creamy milkshake blended with refreshing juice, creating a smooth and fruity treat.', '$0.80'),
    new Menu('Iced Soda', 'A refreshing, chilled soda served over ice, perfect for a cool and fizzy drink.', '$0.75'),
    new Menu('Iced Tea', 'A refreshing cold tea served over ice, perfect for a crisp and revitalizing drink.', '$0.60'),
]

myMenu.push(...basicMenu, ...dessertsMenu, ...drinksMenu);

// создаем карточки меню 

function createMenu(menuGroup, menuClass) {
    menuGroup.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item', menuClass);
        // menuItem.setAttribute('id', `item-${index + 1}`);

        const itemImg = document.createElement('img');
        itemImg.classList.add('menu-image');
        itemImg.setAttribute('src', importImg(index + 1, menuClass, menuItem));
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

        const itemAmount = createItemAmount();
        const itemAmountDecrease = createItemAmountDecrease(itemAmount);
        const itemAmountIncrease = createItemAmountIncrease(itemAmount);

        const itemAmountBtns = document.createElement('div');
        itemAmountBtns.classList.add('price-block__amount-btns');

        itemAmountBtns.appendChild(itemAmountDecrease);
        itemAmountBtns.appendChild(itemAmount);
        itemAmountBtns.appendChild(itemAmountIncrease);

        itemAmountContainer.appendChild(itemAmountBtns);

        itemAmountDecrease.addEventListener('click', () => {
            if (itemAmount.value > 0) {
            itemAmount.value--;
            }
        });

        itemAmountIncrease.addEventListener('click', () => {
            itemAmount.value++;
            if (itemAmount.value > 50) {
                itemAmount.value = 50;
                alert('You can order no more than 50 servings!');
            }
        });

        const itemBasketBtn = document.createElement('button');
        itemBasketBtn.classList.add('basket-btn');

        const itemBasket = document.createElement('img');
        itemBasket.classList.add('basket-icon');
        itemBasket.setAttribute('src', require('../icons/basket-btn.svg'));

        itemBasketBtn.addEventListener('click', () => {
            let itemAmountValue = itemAmount.value;
            if (itemAmountValue > 0) {
                itemBasketBtn.style.backgroundColor = 'rgba(136, 9, 9, 0.87)';
                changeItemBasketStyle(itemBasket);
                addMyOrderItem(item.name, itemAmountValue, item.price);
                itemAmountValue = 0;
            }
            saveToLocalStorage();
            });

        itemBasketBtn.appendChild(itemBasket);
        itemAmountContainer.appendChild(itemBasketBtn);

        itemPriceBlock.appendChild(itemPrice);
        itemPriceBlock.appendChild(itemAmountContainer);

        menuItem.appendChild(itemImg);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDesc);
        menuItem.appendChild(itemPriceBlock);
        menuContainer.appendChild(menuItem);
    });
}

createMenu(basicMenu, 'basic-menu');
createMenu(dessertsMenu, 'desserts-menu');
createMenu(drinksMenu, 'drinks-menu');

function importImg(itemPosition, menuClass, menuItem) {
    let itemImgSrc;
    if (menuClass === 'basic-menu') {
        itemImgSrc = require(`../icons/basic-menu/item-${itemPosition}.png`);
    }
    else if (menuClass === 'desserts-menu'){
        itemImgSrc = require(`../icons/desserts/item-${itemPosition}.png`);
    }
    else if (menuClass === 'drinks-menu') {
        itemImgSrc = require(`../icons/drinks/item-${itemPosition}.png`);
    }
    return itemImgSrc;
}

function createItemAmount() {
    const itemAmount = document.createElement('input');
    itemAmount.classList.add('price-block__amount');
    itemAmount.setAttribute('type', 'number');
    itemAmount.setAttribute('value', '0');
    itemAmount.setAttribute('onkeydown', 'return false');
    return itemAmount;
}

function createItemAmountDecrease(itemAmount) {    
    const itemAmountDecrease = document.createElement('button');
    itemAmountDecrease.classList.add('price-block__amount-btn-decrease');
    itemAmountDecrease.textContent = '-';
    return itemAmountDecrease;
}

function createItemAmountIncrease(itemAmount) {
    const itemAmountIncrease = document.createElement('button');
    itemAmountIncrease.classList.add('price-block__amount-btn-increase');
    itemAmountIncrease.textContent = '+';
    return itemAmountIncrease;
}

mainMenu.appendChild(h2Menu);
mainMenu.appendChild(menuFilterBtns);
mainMenu.appendChild(menuContainer);
mainMenu.appendChild(seeAllBtn);
document.body.appendChild(mainMenu);

// создаем корзину и ее содержимое

function Order (name, value, price) {
    this.name = name;
    this.value = value;
    this.price = price;
}

function addMyOrderItem(name, value, price) {
    const orderItem = new Order(name, value, price);
    const uniqueOrderItem = myOrder.find(orderItem => orderItem.name === name);
    if (uniqueOrderItem) {
        uniqueOrderItem.value = +uniqueOrderItem.value + +value;
        upadetOrderItemValue(uniqueOrderItem, value);
    }
    else {
        myOrder.push(orderItem);
        saveToLocalStorage();
        createBasketOrder(orderItem);
    }
    updateBasketBtnDisplay(myOrder.length); // добавляем позиции в корзину в header
    console.table(myOrder);
}

function upadetOrderItemValue(uniqueOrderItem, value) {
    const orderItems = document.querySelectorAll('.order-item');
    const index = myOrder.indexOf(uniqueOrderItem);

    const orderItemAmount = orderItems[index].querySelector('.order-item__amount');
    const orderItemTotalPrice = orderItems[index].querySelector('.order-item__total-price');
    
    if (uniqueOrderItem.value <= 50) {
        orderItemAmount.value = uniqueOrderItem.value;
        orderItemTotalPrice.textContent = `$${(+uniqueOrderItem.price.slice(1) * uniqueOrderItem.value).toFixed(2)}`;
        updateOrderTotalValue();
    }
    else if (uniqueOrderItem.value > 50) {
        alert('You can order no more than 50 servings of the same dish!');
        uniqueOrderItem.value -= value;
    }
}

// создаем корзину 

const orderItemContainer = document.createElement('div');  // контейнер для заказа
orderItemContainer.classList.add('order-item-container');
orderItemContainer.textContent = 'Your order:';

const orderTotalValue = document.createElement('div');
orderTotalValue.classList.add('order-total-value');

const cleanBasketBtn = document.createElement('button');  // кнопка очистки корзины
cleanBasketBtn.classList.add('clean-basketBtn');
cleanBasketBtn.textContent = 'Clean';

cleanBasketBtn.addEventListener('click', () => {
    myOrder.length = 0;  
    localStorage.clear();
    document.querySelector('.order-item-container').innerHTML = 'Your order:';  // удаляем содержимое контейнера из DOM
    orderItemContainer.classList.toggle('active'); 
    updateBasketBtnDisplay(null); 
});

const orderTotalValueText = document.createElement('p');
orderTotalValueText.classList.add('order-total-value__text');
orderTotalValue.appendChild(cleanBasketBtn);
orderTotalValue.appendChild(orderTotalValueText);

// функция для создания карточек заказа в корзину

export function createBasketOrder(item) {
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');

    // const orderPosition = document.createElement('p');    // позиция в заказе ? нужна ли
    // orderPosition.classList.add('order-item__position');
    // orderPosition.textContent = `${myOrder.indexOf(item) + 1}.`;

    const orderItemBlock = document.createElement('div');
    orderItemBlock.classList.add('order-item__block');

    const orderItemName = document.createElement('p');
    orderItemName.classList.add('order-item__name');
    orderItemName.textContent = item.name;

    const orderItemPrice = document.createElement('p');
    orderItemPrice.classList.add('order-item__price');
    orderItemPrice.textContent = item.price;

    orderItemBlock.appendChild(orderItemName);
    orderItemBlock.appendChild(orderItemPrice);


    const orderItemAmount = document.createElement('input');
    orderItemAmount.classList.add('order-item__amount');
    orderItemAmount.value = item.value;
    console.log(orderItemAmount.value);

    const orderItemDecrease = createItemAmountDecrease(orderItemAmount);
    const orderItemIncrease = createItemAmountIncrease(orderItemAmount);

    orderItemDecrease.addEventListener('click', () => {
        if (orderItemAmount.value > 1) {
            orderItemAmount.value--;
            myOrder[myOrder.indexOf(item)].value = orderItemAmount.value;  // обновляем значение количества в массиве
            updateTotalPrice();
            saveToLocalStorage();
            console.log(myOrder);
        }
        else {
            orderItem.remove();
            myOrder.splice(myOrder.indexOf(item), 1); // удаляем позицую из массива по индексу
            if (myOrder.length > 0) {
                updateBasketBtnDisplay(myOrder.length);// удаляем позиции из корзины в header
            }
            else {
                orderItemContainer.classList.toggle('active'); 
                updateBasketBtnDisplay(null);  
            }
            saveToLocalStorage();
        }
        updateOrderTotalValue();
    });

    orderItemIncrease.addEventListener('click', () => {
        if (orderItemAmount.value < 50) {
            orderItemAmount.value++;
            myOrder[myOrder.indexOf(item)].value = orderItemAmount.value;
            updateTotalPrice();
            saveToLocalStorage();
            console.log(myOrder);
        } else {
            alert('You can order no more than 50 serivngs of the same dish!');
        }
        updateOrderTotalValue();
    });

    const orderItemTotalPrice = document.createElement('p');
    orderItemTotalPrice.classList.add('order-item__total-price');
    orderItemTotalPrice.textContent = `$${(+item.price.slice(1) * +orderItemAmount.value).toFixed(2)}`;
  
    // функция для подсчета итоговой стоимости позиции
    function updateTotalPrice() {
        orderItemTotalPrice.textContent = `$${(+item.price.slice(1) * +orderItemAmount.value).toFixed(2)}`;
    }

    const orderItemTotalBlock = document.createElement('div');
    orderItemTotalBlock.classList.add('order-item__total-block');
    orderItemTotalBlock.appendChild(orderItemAmount);
    orderItemTotalBlock.appendChild(orderItemTotalPrice);

    const orderItemTotalContainer = document.createElement('div');
    orderItemTotalContainer.classList.add('order-item__total-container');   
    orderItemTotalContainer.appendChild(orderItemDecrease);
    orderItemTotalContainer.appendChild(orderItemTotalBlock);   
    orderItemTotalContainer.appendChild(orderItemIncrease);
  
    orderItem.appendChild(orderItemBlock);
    orderItem.appendChild(orderItemTotalContainer);
    orderItemContainer.appendChild(orderItem);
    orderItemContainer.appendChild(orderTotalValue);

    updateOrderTotalValue();

}

mainMenu.appendChild(orderItemContainer);

 // функция для подсчета итоговой стоимости всего заказа
export function updateOrderTotalValue() {  
    let totalValue = myOrder.reduce((sum, item) => sum + (+item.price.slice(1) * item.value), 0);
    orderTotalValueText.textContent = `Total: $${totalValue.toFixed(2)}`;
}

// меняет стиль иконки после нажатия на кнопку
function changeItemBasketStyle(itemBasket) {
    itemBasket.style.transform = 'scale(1.1)';
    itemBasket.style.filter = 'drop-shadow(0px 0px 3px#ffffff)';
}


// localstorage
function saveToLocalStorage() {
    localStorage.setItem('myOrder', JSON.stringify(myOrder));
}

function loadFromLocalStorage() {
    const savedLocal = JSON.parse(localStorage.getItem('myOrder'));
    if (savedLocal) {
        myOrder.push(...savedLocal);
        console.log(myOrder.length);
        myOrder.forEach(createBasketOrder);
        if (myOrder.length > 0) {
            updateBasketBtnDisplay(myOrder.length);
        } 
        else updateBasketBtnDisplay(null);
        updateOrderTotalValue();
    }
}

loadFromLocalStorage();
