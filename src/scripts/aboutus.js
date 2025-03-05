import createHeader from "./header.js";
createHeader();

import "../style/aboutus.css";
import videoplay from "../icons/video.png";

// Основной контейнер
const maincontainer = document.createElement('div');
maincontainer.classList.add('maincontainer');

// Заголовок
const maintitle = document.createElement("div");
maintitle.classList.add("maintitle");

const h1 = document.createElement("h1");
h1.textContent = "Why We are Best Food Maker";
h1.classList.add("title");

const paragraph = document.createElement("p");
paragraph.textContent =
  "Delicious food made with passion and expertise. Experience the best flavors crafted by our top chefs, using the ";
paragraph.classList.add("mini-p");

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'finest ingredients and creative techniques to delight your senses.';
paragraph2.classList.add("mini-p");

// Основной блок с текстом
const maintext = document.createElement("div");
maintext.classList.add("maintext");

const moretext = document.createElement("p");
moretext.classList.add("moretext");
moretext.textContent =
"It is a long established fact that a reader will be distracted layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The normal distribution of letters, as opposed";

// Контейнер для видео
const videoContainer = document.createElement("div");
videoContainer.classList.add("video-container");

// Создаем ссылку для перехода на YouTube
const videoLink = document.createElement('a');
videoLink.setAttribute('href', 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'); // Замените на ID вашего видео
videoLink.setAttribute('target', '_blank'); // Открыть в новой вкладке

// Картинка для видео
const video = document.createElement("img");
video.classList.add("video");
video.setAttribute("alt", "video");
video.setAttribute("src", videoplay); // Заглушка видео

// Кнопка воспроизведения
const playButton = document.createElement("div");
playButton.classList.add("playbutton");

// Стилизуем кнопку воспроизведения
playButton.addEventListener("click", () => {
    window.open("https://youtu.be/hvL1339luv0?si=E1whz558B3t9W3oW", "_blank"); // Переход на видео
});

// Вставляем картинку видео в ссылку
videoLink.appendChild(video);

// Добавляем видео и кнопку в контейнер
videoContainer.appendChild(videoLink);
videoContainer.appendChild(playButton);

// Добавляем контейнер видео в основной блок
maintext.appendChild(videoContainer);

// Добавляем всё в тело документа
document.body.appendChild(maincontainer);
maincontainer.appendChild(maintitle);
maincontainer.appendChild(maintext);

maintitle.appendChild(h1);
maintitle.appendChild(paragraph);
maintitle.appendChild(paragraph2);

maintext.appendChild(moretext);
