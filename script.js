// Learn More button
const learnBtn = document.querySelector(".hero button");

learnBtn.addEventListener("click", () => {
    alert("Welcome to the Valorant Fan Website!\n\nExplore Agents, Maps, and Weapons.");
});

// Card click animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.05)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 200);
    });
});

// Mobile menu toggle
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");
document.querySelector("header").prepend(menuBtn);

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});