// Javascript for contact page

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form input values
    const name = document.getElementById('form_name').value;
    const email = document.getElementById('form_email').value;
    const message = document.getElementById('form_message').value;

    // Construct the mailto link
    const mailtoLink = `mailto:spidy@ultroid.tech?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the mail client with the mailto link
    window.open(mailtoLink);
}

// Add event listener to the form submit button
const form = document.getElementById('contact-form');
form.addEventListener('submit', handleFormSubmit);