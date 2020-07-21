(function() {
  document
    .querySelectorAll('.accordion')
    .forEach(a => a.addEventListener('click', toggleAccordion));

  const isDarkModeActive =
    localStorage.getItem('darkMode') !== null
      ? localStorage.getItem('darkMode') === 'true'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(isDarkModeActive);
})();

const OPEN_STATE = 'open';
const CLOSED_STATE = 'closed';

function toggleAccordion(e) {
  const accordion = e.currentTarget;
  const isOpen = accordion.classList.contains(OPEN_STATE);
  const content = e.currentTarget.nextElementSibling;
  accordion.classList.remove(isOpen ? OPEN_STATE : CLOSED_STATE);
  accordion.classList.add(isOpen ? CLOSED_STATE : OPEN_STATE);
  content.classList.toggle('hidden');
}

function setDarkMode(darkMode) {
  localStorage.setItem('darkMode', darkMode);
  document.getElementById('darkMode').checked = darkMode;
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : '');
}

function toggleDarkMode(e) {
  const isDarkModeActive = e.checked;
  setDarkMode(isDarkModeActive);
}
