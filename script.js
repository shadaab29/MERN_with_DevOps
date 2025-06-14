// DOM SELECTION EXAMPLES
const heading = document.getElementById('main-heading');
const introPara = document.getElementById('intro');
const profilePic = document.getElementById('profile-pic');

// BUTTON SELECTION
const welcomeBtn = document.getElementById('welcome-btn');
const changeColorBtn = document.getElementById('change-color-btn');
const toggleBorderBtn = document.getElementById('toggle-border-btn');
const dateTimeBtn = document.getElementById('date-time-btn');

// FORM SELECTION
const contactForm = document.getElementById('contact-form');
const formOutput = document.getElementById('form-output');

// BUTTON EVENT LISTENERS
welcomeBtn.addEventListener('click', () => {
    alert("Welcome to Shadab's Profile! Enjoy exploring my work.");
});

changeColorBtn.addEventListener('click', () => {
    introPara.style.color = 'blue';
});

toggleBorderBtn.addEventListener('click', () => {
    if (profilePic.style.border) {
        profilePic.style.border = '';
    } else {
        profilePic.style.border = '5px solid darkblue';
    }
});

dateTimeBtn.addEventListener('click', () => {
    const now = new Date();
    document.getElementById('datetime').innerText = "Current Date & Time: " + now.toLocaleString();
});

// FORM HANDLING
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    formOutput.innerText = `Thank you ${name}! We will contact you at ${email}.`;

    // Optionally clear form
    contactForm.reset();
});

