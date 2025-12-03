
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form");
    const successMsg = document.getElementById("success-message");

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const inquiry = document.getElementById("inquiry-purpose");
    const message = document.getElementById("message");

    const errors = {
        firstName: document.getElementById("first-name-error"),
        lastName: document.getElementById("last-name-error"),
        email: document.getElementById("email-error"),
        inquiry: document.getElementById("inquiry-error"),
        message: document.getElementById("message-error"),
    };

    const submitBtn = form.querySelector('button[type="submit"]');

    //functions to validate data
    function validateFirstName() {
        if (firstName.value.trim().length < 2) {
            errors.firstName.textContent = "First name must be at least 2 characters.";
            return false;
        }
        errors.firstName.textContent = "";
        return true;
    }

    function validateLastName() {
        if (lastName.value.trim().length < 2) {
            errors.lastName.textContent = "Last name must be at least 2 characters.";
            return false;
        }
        errors.lastName.textContent = "";
        return true;
    }

    function validateEmail() {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email.value.trim())) {
            errors.email.textContent = "Please enter a valid email.";
            return false;
        }
        errors.email.textContent = "";
        return true;
    }

    function validateInquiry() {
        if (!inquiry.value) {
            errors.inquiry.textContent = "Please select a reason.";
            return false;
        }
        errors.inquiry.textContent = "";
        return true;
    }

    function validateMessage() {
        if (message.value.trim().length < 10) {
            errors.message.textContent = "Message must be at least 10 characters.";
            return false;
        }
        errors.message.textContent = "";
        return true;
    }

    function checkFormValidity() {
        const valid =
            validateFirstName() &&
            validateLastName() &&
            validateEmail() &&
            validateInquiry() &&
            validateMessage();

        submitBtn.disabled = !valid;
        submitBtn.classList.toggle("disabled", !valid);
    }

    //validate as the user enters data
    firstName.addEventListener("input", () => { validateFirstName(); checkFormValidity(); });
    lastName.addEventListener("input", () => { validateLastName(); checkFormValidity(); });
    email.addEventListener("input", () => { validateEmail(); checkFormValidity(); });
    inquiry.addEventListener("change", () => { validateInquiry(); checkFormValidity(); });
    message.addEventListener("input", () => { validateMessage(); checkFormValidity(); });

    //form submit event
    form.addEventListener("submit", (e) => {
        e.preventDefault(); //to prevent the url from filling up with them form data

        checkFormValidity();
        if (submitBtn.disabled) return;

        //success
        successMsg.textContent = "Your message has been sent successfully!";
        successMsg.classList.add("show");

        //clear the form
        form.reset();

        //and disable the button again
        submitBtn.disabled = true;
        submitBtn.classList.add("disabled");

        setTimeout(() => {
            successMsg.classList.remove("show");
        }, 4000);
    });

    //we check that the form is valid when the website is first loaded
    checkFormValidity();
});

