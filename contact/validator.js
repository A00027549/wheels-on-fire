<script>
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form");

    //inputs
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const inquiry = document.getElementById("inquiry-purpose");
    const message = document.getElementById("message");

    //errors section
    const errors = {
        firstName: document.getElementById("first-name-error"),
        lastName: document.getElementById("last-name-error"),
        email: document.getElementById("email-error"),
        inquiry: document.getElementById("inquiry-error"),
        message: document.getElementById("message-error"),
    };

    const submitBtn = form.querySelector('button[type="submit"]');

    //validation functions
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
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            errors.email.textContent = "Please enter a valid email address.";
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

        if (submitBtn.disabled) {
            submitBtn.classList.add("disabled");
        } else {
            submitBtn.classList.remove("disabled");
        }
    }

    //listeners for each input or so
    firstName.addEventListener("input", () => { validateFirstName(); checkFormValidity(); });
    lastName.addEventListener("input", () => { validateLastName(); checkFormValidity(); });
    email.addEventListener("input", () => { validateEmail(); checkFormValidity(); });
    inquiry.addEventListener("change", () => { validateInquiry(); checkFormValidity(); });
    message.addEventListener("input", () => { validateMessage(); checkFormValidity(); });

    //we don't allow submissions in any way if the form is invalid
    form.addEventListener("submit", (e) => {
        checkFormValidity();
        if (submitBtn.disabled) e.preventDefault();
    });

    //make the form invalid as soon as the user loads the page. like when the page is firstly loaded we call this function
    checkFormValidity();
});
</script>
