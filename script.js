// Toggle additional bio content
const readMoreBtn = document.getElementById('read-more-btn');
const additionalBio = document.getElementById('additional-bio');

readMoreBtn.addEventListener('click', () => {
    if (additionalBio.classList.contains('hidden')) {
        additionalBio.classList.remove('hidden');
        readMoreBtn.textContent = 'Read Less';
    } else {
        additionalBio.classList.add('hidden');
        readMoreBtn.textContent = 'Read More';
    }
});

// Display current year in the footer
const currentYear = document.getElementById('current-year');
currentYear.textContent = new Date().getFullYear();

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});