export default function createContactPage () {
    console.log("this is contact page!");

    const container = document.createElement("div");
    container.className = "container2";

    const div1 = document.createElement("div");
    div1.className = "div1";
    const h1 = document.createElement("h2");
    h1.textContent = "HOW TO GET IN TOUCH?";
    const p = document.createElement("p");
    p.textContent = "We value your feedback and inquiries. Whether you have questions about our menu, want to make a reservation, or simply want to say hello, we're here to assist you. Feel free to reach out to our friendly team using the contact information below, and we'll get back to you as soon as possible. Thank you for choosing BK FORK & FIDDLE – we look forward to hearing from you!";
    div1.appendChild(h1);
    div1.appendChild(p);

    const div2 = document.createElement("div");
    div2.className = "div2";

    const div21 = document.createElement("div");

    const h31 = document.createElement("h3");
    h31.textContent = "ADDRESS";
    const p1 = document.createElement("p");
    p1.textContent = "123 Fifth Avenue, Fujairah, FJ 10987, UAE";

    const h32 = document.createElement("h3");
    h32.textContent = "PHONE NUMBER";
    const p2 = document.createElement("p");
    p2.textContent = "+971 54-8896-323";

    const h33 = document.createElement("h3");
    h33.textContent = "EMAIL ADDRESS";
    const p3 = document.createElement("p");
    p3.textContent = "contact@bkf2.com";

    div21.appendChild(h31);
    div21.appendChild(p1);
    div21.appendChild(h32);
    div21.appendChild(p2);
    div21.appendChild(h33);
    div21.appendChild(p3);

    const div22 = document.createElement("div");
    div22.className = "div22";

    const form = document.createElement("form");

    const name = document.createElement("input");
    name.type = "text";
    name.id = "name";
    name.placeholder = "Your Name";

    const email = document.createElement("input");
    email.type = "email";
    email.id = "email";
    email.placeholder = "Your Email";

    const subject = document.createElement("input");
    subject.type = "text";
    subject.id = "subject";
    subject.placeholder = "Subject";

    const message = document.createElement("textarea");
    message.rows = "4";
    message.cols = "50";
    message.id = "message";
    message.placeholder = "Enter your comments here...";

    const btn = document.createElement("input");
    btn.type = "submit";
    btn.value = "SUBMIT";

    btn.addEventListener("click", () =>{
        form.reset();
    });
    
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(subject);
    form.appendChild(message);
    form.appendChild(btn);

    div22.appendChild(form);

    div2.appendChild(div21);
    div2.appendChild(div22);

    container.appendChild(div1);
    container.appendChild(div2);


    return container;
}