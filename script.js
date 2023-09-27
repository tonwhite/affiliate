// Toggle menu
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
};

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted');
});
