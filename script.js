const layer = document.querySelector(".floating-layer");
const btn = document.getElementById("btnLove");

// Emojis: corazones + viajes
const icons = ["💖","💘","💝","💗","❤️","💕","💞","✈️","🧳","🌍","🗺️","📍","🏝️","🛫","🚢"];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function addFloat(amount = 1) {
  for (let i = 0; i < amount; i++) {
    const el = document.createElement("div");
    el.className = "float";
    el.textContent = icons[Math.floor(Math.random() * icons.length)];

    // Variables CSS para controlar cada figura
    el.style.setProperty("--x", `${rand(0, 100)}vw`);
    el.style.setProperty("--size", `${rand(18, 46)}px`);
    el.style.setProperty("--o", `${rand(0.55, 0.95)}`);
    el.style.setProperty("--r", `${rand(-40, 40)}deg`);
    el.style.setProperty("--dur", `${rand(6, 14)}s`);

    layer.appendChild(el);

    // Limpieza para que no se acumulen infinitos
    setTimeout(() => el.remove(), 16000);
  }
}

// Lluvia inicial
addFloat(35);
// Y un goteo constante
setInterval(() => addFloat(3), 900);

// Botón: explota de amor
btn.addEventListener("click", () => {
  addFloat(25);
});