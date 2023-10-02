export default function createMenuPage () {
    console.log("this is menu page!");

    const container = document.createElement("div");
    container.className = "container1";

    const h11 = document.createElement("h1");
    h11.textContent = "Green Been Salad";

    const p1 = document.createElement("p");
    p1.textContent = "Green Beans, Red Onion, Cherry Tomatoes, Feta Cheese, Toasted Almonds or Walnuts, Fresh Herbs (e.g., parsley, basil, or dill), Olive Oil, Red Wine Vinegar or Lemon Juice, Dijon Mustard, Garlic, Salt, Pepper";

    const hrdiv1 = document.createElement("div");
    const hrdiv2 = document.createElement("div");

    const hr1 = document.createElement("hr");
    hrdiv1.appendChild(hr1);
    const hr2 = document.createElement("hr");
    hrdiv2.appendChild(hr2);


    const h12 = document.createElement("h1");
    h12.textContent = "Spaghetti Aglio e Olio";

    const p2 = document.createElement("p");
    p2.textContent = "Spaghetti, Olive Oil, Garlic, Red Pepper Flakes, Fresh Parsley, Grated Parmesan Cheese (optional), Salt, Black Pepper";

    const h13 = document.createElement("h1");
    h13.textContent = "Chicken Stir-Fry";

    const p3 = document.createElement("p");
    p3.textContent = "Chicken Breast, Bell Peppers, Broccoli, Carrots, Soy Sauce, Garlic, Ginger, Sesame Oil, Cornstarch, Vegetable Oil, Salt, Pepper";

    container.appendChild(h11);
    container.appendChild(p1);
    container.appendChild(hrdiv1);
    container.appendChild(h12);
    container.appendChild(p2);
    container.appendChild(hrdiv2);
    container.appendChild(h13);
    container.appendChild(p3);



    return container;
}