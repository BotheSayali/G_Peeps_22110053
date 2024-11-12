document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace with your authentication logic)
    if (username && password) {
        // Redirect to the welcome page
        window.location.href = 'index.html';
    } else {
        document.getElementById('message').innerText = 'Please enter both username and password.';
    }
});