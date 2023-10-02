import './style.css';
import createHomePage from './homepage';    
import createMenuPage from './menupage';
import createContactPage from './contactpage';


const contentDiv = document.getElementById("content");
const headerDiv = document.createElement("div");
headerDiv.className = "header";

const logoDiv = document.createElement("div");
logoDiv.className = "logo";
logoDiv.textContent = "BK FORK & FIDDLE";

const navDiv = document.createElement("div");
navDiv.className = "nav";

const homeLink = document.createElement("a");
homeLink.href = "#";
homeLink.id = "color";
homeLink.classList.add("link");
homeLink.textContent = "HOME";

const menuLink = document.createElement("a");
menuLink.href = "#";
menuLink.classList.add("link");
menuLink.textContent = "MENU";

const contactLink = document.createElement("a");
contactLink.href = "#";
contactLink.classList.add("link");
contactLink.textContent = "CONTACT";

navDiv.appendChild(homeLink);
navDiv.appendChild(menuLink);
navDiv.appendChild(contactLink);

headerDiv.appendChild(logoDiv);
headerDiv.appendChild(navDiv);

contentDiv.appendChild(headerDiv);

const imageHolder = document.createElement("div");
imageHolder.className = "imageHolder";

contentDiv.appendChild(imageHolder);

const parent = document.createElement("div");
parent.appendChild(createHomePage());

imageHolder.appendChild(parent);

homeLink.addEventListener("click", () => {
    homeLink.id = "color";
    menuLink.id = null;
    contactLink.id = null;

    const child = parent.childNodes;
    for (let i = child.length - 1; i >= 0; i--) {
        const childElement = child[i];
        parent.removeChild(childElement);
    }
    parent.appendChild(createHomePage());
});

menuLink.addEventListener("click", () => {
    menuLink.id = "color";
    homeLink.id = null;
    contactLink.id = null;

    const child = parent.childNodes;
    for (let i = child.length - 1; i >= 0; i--) {
        const childElement = child[i];
        parent.removeChild(childElement);
    }
    parent.appendChild(createMenuPage());
});

contactLink.addEventListener("click", () => {
    homeLink.id = null;
    menuLink.id = null;
    contactLink.id = "color";

    const child = parent.childNodes;
    for (let i = child.length - 1; i >= 0; i--) {
        const childElement = child[i];
        parent.removeChild(childElement);
    }
    parent.appendChild(createContactPage());
});