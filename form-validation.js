// Form validation
const myForm = document.querySelector("form");
myForm.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault(); // Prevent form submission for now

    // Reset error messages
    const errorTextElements = document.querySelectorAll(".error-text");
    errorTextElements.forEach((errorText) => (errorText.textContent = ""));

    // Validate name field
    const nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
        displayError(nameInput, "Please enter your name.");
        return;
    }

    // Validate email field
    const emailInput = document.getElementById("email");
    if (emailInput.value.trim() === "") {
        displayError(emailInput, "Please enter an email address.");
        return;
    }

    // Validate date of birth field
    const dobInput = document.getElementById("dob");
    if (dobInput.value === "") {
        displayError(dobInput, "Please enter your date of birth.");
        return;
    }

    // Validate password field
    const passwordInput = document.getElementById("password");
    if (passwordInput.value.trim() === "") {
        displayError(passwordInput, "Please enter a password.");
        return;
    }

    // Validate agreement checkbox
    const agreementCheckbox = document.getElementById("agreement");
    if (!agreementCheckbox.checked) {
        displayError(agreementCheckbox, "Please agree to the regulations.");
        return;
    }

    // If all validations pass, submit the form
    alert("Your account had been created successfully!");
    window.location.href = "./";
}

function displayError(inputElement, errorMessage) {
    inputElement.classList.add("error");
    const errorText = inputElement.nextElementSibling;
    errorText.textContent = errorMessage;
}
