document.getElementById("McFlurrey-formButton").addEventListener("click", load);

function load() {
    document.getElementById("McFlurrey-back").addEventListener("click", back);
    document.getElementById("McFlurrey-submit").addEventListener("click", validate);
    document.getElementById("McFlurrey-leastFavorite").addEventListener("change", feedback);
}

function back(e) {
    e.preventDefault();
    document.getElementById("McFlurrey-Form").style.display = "none";
}

function validate(e) {
    hideErrors()
    if(formHasErrors()) {
        e.preventDefault();
    }
}

function hideErrors() {
    let errorFields = document.getElementsByClassName("McFlurrey_error");
    for(let i=0; i<errorFields.length; i++) {
        errorFields[i].style.display = "none";
    }
}

function showError(formField, errorId, errorFlag) {
	document.getElementById(errorId).style.display = "block";
	if(!errorFlag) {
		document.getElementById(formField).focus();
		if(formField.type == "text") {
			document.getElementById(formField).select();
		}
	}
}

function formHasErrors() {

}

function feedback() {
    let leastFavorite = document.getElementById("McFlurrey-leastFavorite")
    document.getElementById("feedback").value = ""
    if(leastFavorite.value != "") {
        document.getElementById("McFlurrey-feedback-container").style.display = "block"
    }
    else {
        document.getElementById("McFlurrey-feedback-container").style.display = "none"
    }
}