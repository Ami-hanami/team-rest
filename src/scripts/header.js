import logoSrc from "../icons/logo.png";
import cartIconSrc from "../icons/shopping-cart.svg";
import searchIconSrc from "../icons/Search-icon.svg";
import "../style/header.css";

// функция для обновления количества позиций в корзине
export function updateBasketBtnDisplay(orderNewLength) {
  const basketCount = document.getElementById("basketCount");
  basketCount.textContent = orderNewLength;
}

// эта короче функция да. не я ее делал, но она нужна, не трогать!

function createHeader(basketBtnClick, updateBasketBtnAmount) {
    if (document.querySelector("header")) return document.querySelector("header");

    const header = document.createElement("header");

    const ul = document.createElement("ul");
    ul.classList.add("nav-list");

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement('li');

    const linkWelcome = document.createElement("a");
    linkWelcome.classList.add("list-item");
    linkWelcome.textContent = "Welcome";
    linkWelcome.setAttribute("href", "../index.html");

    const linkMenu = document.createElement("a");
    linkMenu.classList.add("list-item");
    linkMenu.textContent = "Our Menu";
    linkMenu.setAttribute("href", "../ourmenu.html");

    const linkContact = document.createElement("a");
    linkContact.classList.add("list-item");
    linkContact.textContent = "Contact";
    linkContact.setAttribute("href", "../contact.html");

    const linkaboutus = document.createElement("a");
    linkaboutus.classList.add("list-item");
    linkaboutus.textContent = "About Us";
    linkaboutus.setAttribute("href", "../aboutus.html");

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.setAttribute("alt", "logo-icon");
    logo.setAttribute("src", logoSrc);

    const serviceCont = document.createElement("div");
    serviceCont.classList.add("service-container");

    const cart = document.createElement("img");
    cart.classList.add("cart");
    cart.setAttribute("alt", "basket");
    cart.setAttribute("src", cartIconSrc);

    // создала кнопку корзины и прикрепила к ней иконку
    const basketBtn = document.createElement('button');
    basketBtn.classList.add('basket-btn__header');
    const basketBtnAmount = document.createElement('p');
    basketBtnAmount.classList.add("toggle-basketBtn");
    basketBtnAmount.setAttribute("id", "basketCount"); // присваиваем id для обновления
    // basketBtnAmount.textContent = `${updateBasketBtnAmount()}`;
    basketBtn.appendChild(cart);
    basketBtn.appendChild(basketBtnAmount);

    // обработчик клика на кнопку корзины
    basketBtn.addEventListener("click", (basketBtnClick));

    const search = document.createElement("img");
    search.classList.add("search");
    search.setAttribute("alt", "magnifying glass");
    search.setAttribute("src", searchIconSrc);

    const memberBtn = document.createElement("button");
    memberBtn.classList.add("member-btn");
    memberBtn.textContent = "Become a Member";

    const burgermenu = document.createElement("button");
    burgermenu.classList.add("burgermenu");
    burgermenu.innerHTML = "&#9776;";


    header.appendChild(burgermenu);

    burgermenu.addEventListener("click", () => {
      const ul = header.querySelector("ul");
      ul.classList.toggle("active");
      burgermenu.classList.toggle("active"); // Добавляем класс
      if (ul.classList.contains("active")) {
        burgermenu.innerHTML = "&#10006;"; // Крестик
      } else {
        burgermenu.innerHTML = "&#9776;"; // Бургер
      }
    });


    document.body.prepend(header);

    header.appendChild(ul);
    header.appendChild(logo);
    header.appendChild(serviceCont);

    ul.appendChild(li1);
    li1.appendChild(linkWelcome);

    ul.appendChild(li2);
    li2.appendChild(linkMenu);

    ul.appendChild(li3);
    li3.appendChild(linkContact);

    ul.appendChild(li4);
    li4.appendChild(linkaboutus);

    serviceCont.appendChild(basketBtn);
    serviceCont.appendChild(search);
    serviceCont.appendChild(memberBtn);

    return header;
}

export default createHeader;
