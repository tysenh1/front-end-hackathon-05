document.getElementById("survey-form").style.display = "none";

// Show form when the button is clicked
document.getElementById("survey-form-button").addEventListener("click", function () {
    document.getElementById("survey-form").style.display = "block";
    document.getElementById("survey-form-button").style.display = "none";
});

// Handle going back from the form
document.getElementById("survey-back").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("survey-form").style.display = "none";
    document.getElementById("survey-form-button").style.display = "block";
});

// Validate form on submit
document.getElementById("survey-form").addEventListener("submit", function (e) {
    validate(e);  // Perform validation before submitting
});

// Main validation function
function validate(e) {
    hideErrors();  // Hide any previous errors
    if (formHasErrors()) {
        e.preventDefault();  // Stop form submission if errors exist
    } else {
        alert("Thank you for your feedback!");
    }
}

// Hide all error messages
function hideErrors() {
    let errorFields = document.getElementsByClassName("survey_error");
    for (let i = 0; i < errorFields.length; i++) {
        errorFields[i].style.display = "none"; // Hide error messages
    }
}

// Show specific error for a form field
function showError(formField, errorId) {
    document.getElementById(errorId).style.display = "block";  // Show the error message
    document.getElementById(formField).focus();  // Focus on the invalid field
}

// Check if any form field has errors
function formHasErrors() {
    let errorFlag = false;

    // Full Name validation
    let fullname = document.getElementById("fullname").value;
    if (fullname.trim() === "") {
        showError("fullname", "fullname_error");
        errorFlag = true;
    }

    // McFlurry rating validation (radio buttons)
    let mcflurryRating = document.querySelector('input[name="mcflurry-rating"]:checked');
    if (!mcflurryRating) {
        showError("survey-mcflurry-container", "mcflurry_error");
        errorFlag = true;
    }

    // McCafé rating validation (radio buttons)
    let mccafeRating = document.querySelector('input[name="mccafe-rating"]:checked');
    if (!mccafeRating) {
        showError("survey-mccafe-container", "mccafe_error");
        errorFlag = true;
    }

    // Big Mac rating validation (radio buttons)
    let bigmacRating = document.querySelector('input[name="bigmac-rating"]:checked');
    if (!bigmacRating) {
        showError("survey-bigmac-container", "bigmac_error");
        errorFlag = true;
    }

    return errorFlag;  // Return true if there are errors, false if no errors
}
