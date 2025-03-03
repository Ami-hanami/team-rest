import '../style/index.css';
import createHeader from './header.js';


const header = createHeader();

const container = document.createElement("div");
container.classList.add("container");

const h1 = document.createElement("h1");
h1.textContent = "Welcome! We Made Delicious Food for You";
container.appendChild(h1);
h1.classList.add("h1");

const p = document.createElement("p");
p.textContent =
  "only we have the most delicious burgers and drinks and much more delicious things!";
container.appendChild(p);
p.classList.add("p");

const button = document.createElement("button");
button.textContent = "Order Online";
container.appendChild(button);
button.classList.add("button");

document.body.appendChild(container);

