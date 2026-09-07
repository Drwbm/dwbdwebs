const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const settings = {
  darkMode: document.getElementById("darkMode"),
  largeText: document.getElementById("largeText"),
  reduceMotion: document.getElementById("reduceMotion")
};

function loadSettings() {
  settings.darkMode.checked = localStorage.getItem("dwbw-dark") !== "off";
  settings.largeText.checked = localStorage.getItem("dwbw-large") === "on";
  settings.reduceMotion.checked = localStorage.getItem("dwbw-motion") === "on";
  applySettings();
}

function applySettings() {
  document.body.classList.toggle("large-text", settings.largeText.checked);
  document.body.classList.toggle("reduce-motion", settings.reduceMotion.checked);
  // This site is intentionally dark-first; the dark-mode control is retained
  // as a preference and can be expanded later without changing the layout.
}

settings.darkMode.addEventListener("change", () => {
  localStorage.setItem("dwbw-dark", settings.darkMode.checked ? "on" : "off");
  applySettings();
});
settings.largeText.addEventListener("change", () => {
  localStorage.setItem("dwbw-large", settings.largeText.checked ? "on" : "off");
  applySettings();
});
settings.reduceMotion.addEventListener("change", () => {
  localStorage.setItem("dwbw-motion", settings.reduceMotion.checked ? "on" : "off");
  applySettings();
});

loadSettings();
