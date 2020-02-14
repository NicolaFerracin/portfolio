(function() {
  var accordions = document.querySelectorAll('.toggle');
  accordions.forEach(a => a.addEventListener('click', toggleAccordion));
}())

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
