import "../style/contact.css";

import createHeader, { updateBasketBtnDisplay } from "./header.js";

import facebookIcon from "../icons/facebook.svg";
import twitterIcon from "../icons/twitter.svg";
import discordIcon from "../icons/discord.svg";
import burgerImage from "../icons/burger_12392020.png";
import friesImage from "../icons/french-fries_17552079.png";
import arrowIcon from "../icons/icon-down-left-9055237.png";
import restaurantImage from "../icons/resti.jpg";

createHeader();

const myLocalOrder = JSON.parse(localStorage.getItem('myOrder'));

if (myLocalOrder) {
  if (myLocalOrder.length > 0) {
  updateBasketBtnDisplay(myLocalOrder.length);
}
else updateBasketBtnDisplay(null);
}


// проверка, выполняется ли код на странице контактов
if (window.location.pathname.includes("contact.html")) {
  // контейнер для контента
  let content = document.getElementById("content");
  if (!content) {
    content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
  }

  createRestaurantsBlock();
  createContactsBlock();
  createAddressesModal();
  typeText("typed-header");
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
    {
      title: "Our Products",
      items: ["Our menus", "Our burgers", "Our times sides", "Our naandwiches"],
    },
    { title: "Legal Information", items: ["Legal Notice"] },
    { title: "Contact us", items: ["Our addresses"] },
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
      const span = document.createElement("span");
      span.textContent = item;

      //стрелка дря адресов
      if (item === "Our addresses") {
        const arrow = document.createElement("img");
        arrow.src = arrowIcon;
        arrow.alt = "Arrow Icon";
        arrow.classList.add("arrow-icon");
        span.appendChild(arrow);

        // обработчик клика для our addresses
        span.addEventListener("click", () => {
          showAddressesModal();
        });
      }

      // обработчик события для корректной работы hover
      span.addEventListener("mouseenter", () => {
        span.style.color = "#959595f9";
      });

      span.addEventListener("mouseleave", () => {
        span.style.color = "";
      });

      li.appendChild(span);
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

  // иконки
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

function createAddressesModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal-adresses");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-adresses-content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";

  const title = document.createElement("h3");
  title.textContent = "Our Addresses";

  const addressesList = document.createElement("ul");
  const addresses = [
    "Moscow, Novy Arbat 28",
    "Moscow, Presnenskaya Naberezhnaya 8/1",
    "Moscow, Lesnaya 20, Building 1",
    "Moscow, Malaya Bronnaya 2",
    "Moscow, Tverskoy Boulevard 24, Building 1",
  ];

  addresses.forEach((address) => {
    const li = document.createElement("li");
    li.textContent = address;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      modal.style.display = "none";
      showRestaurantInfo(address);
    });
    addressesList.appendChild(li);
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  modalContent.appendChild(closeButton);
  modalContent.appendChild(title);
  modalContent.appendChild(addressesList);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  return modal;
}

// для показа модального окна
function showAddressesModal() {
  const modal = document.querySelector(".modal-adresses");
  if (modal) {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
  }
}

// для закрытия модального окна
// function closeAddressesModal() {
//   const modal = document.querySelector(".modal-adresses");
//   if (modal) {
//     modal.classList.remove("show");
//     modal.classList.add("hide");

//     // завершение анимации перед скрытием окна
//     setTimeout(() => {
//       modal.style.display = "none";
//       modal.classList.remove("hide");
//     }, 300);
//   }
// }

// // закрытие мод окна при клике на крестик
// const closeButton = document.querySelector(".modal-adresses .close-btn");
// if (closeButton) {
//   closeButton.addEventListener("click", closeAddressesModal);
// }

// // закрытие мод окна при клике вне его
// window.addEventListener("click", (event) => {
//   const modal = document.querySelector(".modal-adresses");
//   if (event.target === modal) {
//     closeAddressesModal();
//   }
// });

// для показа информации о ресторане (новое)
function showRestaurantInfo(address) {
  const infoModal = document.createElement("div");
  infoModal.classList.add("info-modal");

  const infoContent = document.createElement("div");
  infoContent.classList.add("info-content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";

  const image = document.createElement("img");
  image.src = restaurantImage;
  image.alt = "Restaurant Image";
  image.classList.add("restaurant-image");

  const details = document.createElement("div");
  details.classList.add("details");
  details.innerHTML = `
    <h3>${address}</h3>
    <p>Phone: +7 (985) 182-96-00</p>
    <p>Working Hours: 10:00 am - 10:00 pm</p>
  `;

  // закрытие мод окна при клике на крестик
  closeButton.addEventListener("click", () => {
    infoModal.classList.remove("show"); //убираем класс анимац
    infoModal.classList.add("hide"); // добавить класс анимац

    // ожидание завершения анимации перед скрытием окна
    setTimeout(() => {
      infoModal.style.display = "none"; // скрытьмодальное окно
      infoModal.classList.remove("hide"); // убрать класс для анимации закрытия
    }, 300);
  });

  // закрытие модокна при клике вне его
  window.addEventListener("click", (event) => {
    if (event.target === infoModal) {
      infoModal.classList.remove("show");
      infoModal.classList.add("hide");

      setTimeout(() => {
        infoModal.style.display = "none";
        infoModal.classList.remove("hide");
      }, 300);
    }
  });

  infoContent.appendChild(closeButton);
  infoContent.appendChild(details);
  infoContent.appendChild(image);
  infoModal.appendChild(infoContent);

  document.body.appendChild(infoModal);

  // показ модального окно с анимацией
  infoModal.style.display = "flex";
  setTimeout(() => {
    infoModal.classList.add("show");
  }, 10);
}
