function validateLogin() {
    // Reset border color
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    // Clear previous error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Get values from the form
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // check all the field is empty or not 
    if (email === '') {
        document.getElementById('emailError').innerText = 'E-mail is required';
        document.getElementById('email').classList.add('error', 'form-control');
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required';
        document.getElementById('password').classList.add('error', 'form- control');
    }

    // If either field is empty, stop further validation
    if (email === '' || password === '') {
        return;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        document.getElementById('email').classList.add('error', 'form-control');
        return;
    } else {
        // Remove the 'error' class if the email is valid
        document.getElementById('email').classList.remove('error');
    }

    // Wrong email and password validation
    if (email === 'admin@admin.com' && password === '123456') {
        alert('Login successful');
        // Clear the form after successful login
        document.getElementById('loginForm').reset();
    } else {
        alert('Incorrect email or password');
        // Set border color to red for wrong entry
        document.getElementById('email').classList.add('error', 'form-control');
        document.getElementById('password').classList.add('error', 'form-control');
    }
}


// toggle password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    // Toggle the type attribute using getAttribute() method
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Toggle the eye and fa-eye icon
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
});