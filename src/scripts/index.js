import '../style/index.css';
import createHeader, { updateBasketBtnDisplay } from './header.js';

const header = createHeader();
const myLocalOrder = JSON.parse(localStorage.getItem('myOrder'));

if (myLocalOrder){
  if (myLocalOrder.length > 0) {
  updateBasketBtnDisplay(myLocalOrder.length);
}
else updateBasketBtnDisplay(null);
}

const container = document.createElement("div");
container.classList.add("container");

const h1 = document.createElement("h1");
h1.innerHTML = "Welcome! <br> We Made Delicious Food for You";
container.appendChild(h1);
h1.classList.add("h1");

const p = document.createElement("p");
p.textContent =
  "Only we have the most delicious burgers and drinks and much more delicious things";
container.appendChild(p);
p.classList.add("p");

const button = document.createElement("button");
button.textContent = "Sign in";
container.appendChild(button);
button.classList.add("button");

// контейнер для изображения
const burgerContainer = document.createElement("div");
burgerContainer.classList.add("burger-container");

// burgerContainer.appendChild(burgerImage);
document.body.appendChild(burgerContainer);

// модальное окно
const modal = document.createElement("div");
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const closeButton = document.createElement("span");
closeButton.classList.add("close-button");
closeButton.innerHTML = "&times;";

const modalTitle = document.createElement("h2");
modalTitle.textContent = "Login";
modalTitle.classList.add("modal-title");

const form = document.createElement("form");

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.required = true;

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.required = true;

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Sign In";
submitButton.classList.add("modal-button");

form.appendChild(emailInput);
form.appendChild(passwordInput);
form.appendChild(submitButton);

modalContent.appendChild(closeButton);
modalContent.appendChild(modalTitle);
modalContent.appendChild(form);

modal.appendChild(modalContent);
document.body.appendChild(modal);

// окно открывается при нажатии на кнопку
button.addEventListener("click", () => {
  modal.style.display = "flex";
});

// закрывается при нажатии на крестик
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// закрывается вне области
window.addEventListener("click", (event) => {
  if (event.target === modal) {
      modal.style.display = "none";
  }
});

document.body.appendChild(container);