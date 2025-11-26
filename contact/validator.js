document.getElementById("form").addEventListener("submit",(ev)=>{
    ev.preventDefault();
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const query = document.querySelector("#inquiry-purpose");
    const inquiry = document.querySelector("#first-name");


    const firstNameError = document.querySelector("#first-name-error");
    const lastNameError = document.querySelector("#last-name-error");
    const emailError = document.querySelector("#email-error");
    const inquiryError = document.querySelector("#inquiry-error");
    const messageError = document.querySelector("#message-error");


})