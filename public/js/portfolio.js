(function() {
  var accordions = document.querySelectorAll('.toggle');
  accordions.forEach(a => a.addEventListener('click', toggleAccordion));

  var isDarkModeActive = localStorage.getItem('darkMode') !== null
  ? localStorage.getItem('darkMode') === 'true'
  : window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(isDarkModeActive);
}());

function toggleAccordion(e) {
  var accordion = e.currentTarget;
  var isActive = accordion.classList.contains('active');
  var content = e.currentTarget.nextElementSibling;
  if (isActive) {
    accordion.classList.remove('active');
    accordion.classList.add('inactive');
  } else {
    accordion.classList.remove('inactive');
    accordion.classList .add('active');
  }
  content.classList.toggle('hidden')
}

function setDarkMode(darkMode) {
  localStorage.setItem('darkMode', darkMode);
  document.getElementById('darkMode').checked = darkMode;
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : '');
}

function toggleDarkMode(e) {
  var isDarkModeActive = e.checked;
  setDarkMode(isDarkModeActive);
}
