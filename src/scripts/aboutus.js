import createHeader, { updateBasketBtnDisplay } from "./header.js";
createHeader();

const myLocalOrder = JSON.parse(localStorage.getItem('myOrder'));

if (myLocalOrder){
  if (myLocalOrder.length > 0) {
  updateBasketBtnDisplay(myLocalOrder.length);
}
else updateBasketBtnDisplay(null);
}


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
paragraph.classList.add("mini-p1");

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'finest ingredients and creative techniques to delight your senses.';
paragraph2.classList.add("mini-p");
paragraph2.classList.add("mini-p2");


const maintext = document.createElement("div");
maintext.classList.add("maintext");

const moretext = document.createElement("p");
moretext.classList.add("moretext");
moretext.textContent =
"It is a long established fact that a reader will be distracted layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The normal distribution of letters, as opposed";

// Контейнер для видео
const videoContainer = document.createElement("div");
videoContainer.classList.add("video-container");

// Создал ссылку для перехода на YouTube
const videoLink = document.createElement('a');
videoLink.setAttribute('href', 'https://youtu.be/0AsSmJ_Ex30?si=ueDHQ2nlzCylNDJr');
videoLink.setAttribute('target', '_blank');


const video = document.createElement("img");
video.classList.add("video");
video.setAttribute("alt", "video");
video.setAttribute("src", videoplay);

// Кнопка воспроизведения
const playButton = document.createElement("div");
playButton.classList.add("playbutton");


playButton.addEventListener("click", () => {
    window.open("https://youtu.be/0AsSmJ_Ex30?si=ueDHQ2nlzCylNDJr");
});


videoLink.appendChild(video);


videoContainer.appendChild(videoLink);
videoContainer.appendChild(playButton);


maintext.appendChild(videoContainer);


document.body.appendChild(maincontainer);
maincontainer.appendChild(maintitle);
maincontainer.appendChild(maintext);

maintitle.appendChild(h1);
maintitle.appendChild(paragraph);
maintitle.appendChild(paragraph2);

maintext.appendChild(moretext);
