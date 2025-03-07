import "../style/contact.css";

import createHeader from "./header.js";

import facebookIcon from "../icons/facebook.svg";
import twitterIcon from "../icons/twitter.svg";
import discordIcon from "../icons/discord.svg";

import burgerImage from "../icons/burger_12392020.png";
import friesImage from "../icons/french-fries_17552079.png";

createHeader();

// проверка, выполняется ли код на странице контактов
if (window.location.pathname.includes("contact.html")) {


  // создаем контейнер для контента
  let content = document.getElementById("content");
  if (!content) {
    content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
  }
 // блок с ресторанами и картой
 createRestaurantsBlock();

 // блок с контактами и соцсетями
 createContactsBlock();

 // запускаем анимацию печати текста
 typeText("typed-header");

 // добавляем парящие картинки
 addFloatingImages();
}

  // функция для блока "our rest"
  function createRestaurantsBlock() {
    const section = document.createElement("section");
    section.classList.add("restaurants-section");

    // контейнер для текста и карты
    const container = document.createElement("div");
    container.classList.add("restaurants-container");

    // левый текстовый блок
    const textBlock = document.createElement("div");
    textBlock.classList.add("restaurants-text");

    // заголовок для печ
    const header = document.createElement("h2");
    header.id = "typed-header";
    header.setAttribute("data-text", "Our Restaurants. Where to Find Us?"); 

    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Want to have a superb meal in an exceptional setting with family, friends or work colleagues, here are the addresses of our restaurants.";

    textBlock.appendChild(header);
    textBlock.appendChild(paragraph);

    // карта справа
    const mapBlock = document.createElement("iframe");
    mapBlock.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4528226943908!2d37.59507969515374!3d55.76800692143976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a3f2cf41fa1%3A0xce710596350b5d9b!2z0KLQstC10YDRgdC60LDRjyDRg9C7LiwgMjQsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMjUwMDk!5e0!3m2!1sru!2snl!4v1740961330373!5m2!1sru!2snl"; 
    mapBlock.width = "100%";
    mapBlock.height = "300";
    mapBlock.style.border = "0";
    mapBlock.allowFullscreen = true;
    mapBlock.loading = "lazy";

    // добавляем элементы в контейнер
    container.appendChild(textBlock);
    container.appendChild(mapBlock);
    section.appendChild(container);
    content.appendChild(section);
  }
 
  /// функция для блока "контакты"
  function createContactsBlock() {
    const section = document.createElement("section");
    section.classList.add("contacts-section");

    // контейнер для информации
    const container = document.createElement("div");
    container.classList.add("contacts-container");

    // колонки с текстом
    const columns = [
      { title: "Our Products", 
        items: ["Our menus", "Our burgers", "Our times sides", "Our naandwiches"] },
      { title: "Legal Information", items: ["Legal Notice"] },
      { title: "Contact us", 
        items: ["Contacts", "Our addresses", "Become a Times Square franchisee"] },
    ];

    //колонки
    columns.forEach((col) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("contact-column");

      const title = document.createElement("h3");
      title.textContent = col.title;

      const list = document.createElement("ul");
      col.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });

      colDiv.appendChild(title);
      colDiv.appendChild(list);
      container.appendChild(colDiv);
    });

    // добавляем контейнер с контактами
    section.appendChild(container);
    section.appendChild(createSocialIcons());
    content.appendChild(section);
  }


  // функция для создания иконок соцсетей
function createSocialIcons() {
    const socialIcons = document.createElement("div");
    socialIcons.classList.add("social-icons");
  
    const icons = [
      { name: "Facebook", src: facebookIcon },
      { name: "Twitter", src: twitterIcon },
      { name: "Instagram", src: discordIcon },
    ];
  
    // добавляем иконки
    icons.forEach((icon) => {
      const img = document.createElement("img");
      img.src = icon.src;
      img.alt = icon.name;
      img.classList.add("social-icon");
      socialIcons.appendChild(img);
    });
  
    return socialIcons;
  }
  
  // функция для анимации печати текста
  function typeText(elementId) {
    const el = document.getElementById(elementId);
    const text = el.getAttribute("data-text");
    let index = 0;
  
    function type() {
      if (index < text.length) {
        el.textContent += text[index];
        index++;
        setTimeout(type, 100);
      }
    }
  
    el.classList.add("typing");
    setTimeout(type, 500);
  }

  // функция для добавления парящих картинок
  function addFloatingImages() {
    const floatingContainer = document.createElement("div");
    floatingContainer.classList.add("floating-images");
    document.body.appendChild(floatingContainer);
    const images = [
      { src: burgerImage, class: "floating-1" },
      { src: friesImage, class: "floating-2" },
    ];

    // добавляем картинки
    images.forEach((imgData) => {
      const img = document.createElement("img");
      img.src = imgData.src;
      img.classList.add("floating", imgData.class);
      floatingContainer.appendChild(img);
    });
  }
