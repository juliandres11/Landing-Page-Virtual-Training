const registerBtn = document.querySelector('.register-btn');
const form = document.querySelector('.modal');
const cancelForm = document.getElementById('cancel-btn');
const submitForm = document.getElementById('submit-btn');

function goToSection(section) {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('scroll', function() {
    displayButton();
  });

function displayButton() {
    if (window.scrollY > 92) {
        console.log(window.scrollY);
        document.getElementById('scroll-btn').style.display = 'block';
      } else {
        document.getElementById('scroll-btn').style.display = 'none';
      }
}

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.add('modal--show');
});

cancelForm.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.remove('modal--show');
});

submitForm.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.remove('modal--show');
  alert('¡Pronto nos pondremos en contacto contigo!');
});