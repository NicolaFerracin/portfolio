const OPEN_STATE = "open";
const CLOSED_STATE = "closed";
const HIDDEN_CLASS_NAME = "hidden";

(function () {
  document
    .querySelectorAll(".accordion")
    .forEach((a) => a.addEventListener("click", toggleAccordion));

  document
    .querySelectorAll("a[data-accordion]")
    .forEach((a) => a.addEventListener("click", openAccordionLink));

  const isDarkModeActive =
    localStorage.getItem("darkMode") !== null
      ? localStorage.getItem("darkMode") === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  setDarkMode(isDarkModeActive);

  document.getElementById("experienceYears").innerText =
    new Date().getFullYear() - 2016;

  const { hash } = document.location;
  if (hash)
    openAccordion(document.querySelector(`${hash} .${CLOSED_STATE}`), true);
})();

function openAccordionLink() {
  const accordionName = this.dataset.accordion;
  closeAllAccordions();
  openAccordion(document.querySelector(`#${accordionName} .accordion`), true);
}

function closeAllAccordions() {
  document.querySelectorAll(".accordion").forEach(closeAccordion);
}

function openAccordion(accordionEl, scroll = false) {
  accordionEl.classList.remove(CLOSED_STATE);
  accordionEl.classList.add(OPEN_STATE);
  accordionEl.nextElementSibling.classList.remove(HIDDEN_CLASS_NAME);
  if (scroll)
    setTimeout(() => accordionEl.scrollIntoView({ behavior: "smooth" }), 10);
}

function closeAccordion(accordionEl) {
  accordionEl.classList.remove(OPEN_STATE);
  accordionEl.classList.add(CLOSED_STATE);
  accordionEl.nextElementSibling.classList.add(HIDDEN_CLASS_NAME);
}

function toggleAccordion(e) {
  const accordion = e.currentTarget;
  const isOpen = accordion.classList.contains(OPEN_STATE);
  if (isOpen) closeAccordion(accordion);
  else openAccordion(accordion);
}

function setDarkMode(darkMode) {
  localStorage.setItem("darkMode", darkMode);
  document.getElementById("darkMode").checked = darkMode;
  document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "");
}

function toggleDarkMode(e) {
  setDarkMode(e.checked);
}
