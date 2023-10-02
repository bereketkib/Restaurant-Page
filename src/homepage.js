import dish from './dish.jpeg';

export default function createHomePage () {
    const container = document.createElement("div");
    container.className = "container";

    const text = document.createElement("div");
    text.className = "text";

    const homeContent = document.createElement("div");
    homeContent.className = "homeContent";

    const h2 = document.createElement("h2");
    h2.textContent = "Welcome to Our Restaurant";

    const p = document.createElement("p");
    p.textContent = "Discover a world of culinary delights at our restaurant.";

    const btn = document.createElement("button");
    btn.textContent = "BOOK A TABLE";
    btn.className = "btn";

    const img = document.createElement("img");
    img.className = "image";
    img.src = dish;
    img.alt = "The most popular dish";

    text.appendChild(h2);
    text.appendChild(p);
    text.appendChild(btn);

    homeContent.appendChild(text);
    homeContent.appendChild(img);

    container.appendChild(homeContent);

    return container;


}