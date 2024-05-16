function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Clear previous error messages
    document.getElementById('name-errorMessages').innerText = '';
    document.getElementById('email-errorMessages').innerText = '';
    document.getElementById('message-errorMessages').innerText = '';

    resetValidationStyles();

    let isValid = true;

    // Validate Name
    if (name.trim() === "") {
        document.getElementById('name-errorMessages').innerText = 'Name is required';
        document.getElementById("name").classList.add("is-invalid");
        isValid = false;
    }

    // Validate E-mail
    if (email.trim() === "") {
        document.getElementById('email-errorMessages').innerText = 'E-mail is required';
        document.getElementById("email").classList.add("is-invalid");
        isValid = false;
    } else {
        // E-mail format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email-errorMessages').innerText = 'Invalid email format';
            document.getElementById("email").classList.add("is-invalid");
            isValid = false;
        }
    }

    // Validate Message
    if (message.trim() === "") {
        document.getElementById('message-errorMessages').innerText = 'Message is required';
        document.getElementById("message").classList.add("is-invalid");
        isValid = false;
    }

    // If any field is invalid, prevent form submission
    // Contact Us image will be increased as form after clicked submit button
    if (!isValid) {
        document.getElementById("img").style.height = "462px";
        return;
    }

    // Reset the form
    alert('Submitted successfully');
    document.getElementById("contactForm form").reset();
    document.getElementById("img").style.height = "380px";

}

function resetValidationStyles() {
    document.getElementById("name").classList.remove("is-invalid");
    document.getElementById("email").classList.remove("is-invalid");
    document.getElementById("message").classList.remove("is-invalid");
}
