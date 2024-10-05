function load() {
    let smores = document.getElementById("Smores");
    smores.addEventListener("click", displaySmores);

    let strawberry = document.getElementById("Strawberry");
    strawberry.addEventListener("click", displayStrawberry);

    let confetti = document.getElementById("Confetti");
    confetti.addEventListener("click", displayConfetti);

    let oreo = document.getElementById("Oreo");
    oreo.addEventListener("click", displayOreo);

    let skor = document.getElementById("SKOR");
    skor.addEventListener("click", displaySkor);

    let smarties = document.getElementById("Smarties");
    smarties.addEventListener("click", displaySmarties);
}

function displaySmores() {
    let mcflurreyPlaceholder = document.getElementById("McFlurrey-Placeholder");
    mcflurreyPlaceholder.style.display = "none";
    let smoresInfo = document.getElementById("Smores-info");
    smoresInfo.style.display = "block";
    let strawberryInfo = document.getElementById("Strawberry-info");
    strawberryInfo.style.display = "none";
    let confettiInfo = document.getElementById("Confetti-info");
    confettiInfo.style.display = "none";
    let oreoInfo = document.getElementById("Oreo-info");
    oreoInfo.style.display = "none";
    let skorInfo = document.getElementById("SKOR-info");
    skorInfo.style.display = "none";
    let smartiesInfo = document.getElementById("Smarties-info");
    smartiesInfo.style.display = "none";
}

function displayStrawberry() {
    let mcflurreyPlaceholder = document.getElementById("McFlurrey-Placeholder");
    mcflurreyPlaceholder.style.display = "none";
    let smoresInfo = document.getElementById("Smores-info");
    smoresInfo.style.display = "none";
    let strawberryInfo = document.getElementById("Strawberry-info");
    strawberryInfo.style.display = "block";
    let confettiInfo = document.getElementById("Confetti-info");
    confettiInfo.style.display = "none";
    let oreoInfo = document.getElementById("Oreo-info");
    oreoInfo.style.display = "none";
    let skorInfo = document.getElementById("SKOR-info");
    skorInfo.style.display = "none";
    let smartiesInfo = document.getElementById("Smarties-info");
    smartiesInfo.style.display = "none";
}

function displayConfetti() {
    let mcflurreyPlaceholder = document.getElementById("McFlurrey-Placeholder");
    mcflurreyPlaceholder.style.display = "none";
    let smoresInfo = document.getElementById("Smores-info");
    smoresInfo.style.display = "none";
    let strawberryInfo = document.getElementById("Strawberry-info");
    strawberryInfo.style.display = "none";
    let confettiInfo = document.getElementById("Confetti-info");
    confettiInfo.style.display = "block";
    let oreoInfo = document.getElementById("Oreo-info");
    oreoInfo.style.display = "none";
    let skorInfo = document.getElementById("SKOR-info");
    skorInfo.style.display = "none";
    let smartiesInfo = document.getElementById("Smarties-info");
    smartiesInfo.style.display = "none";
}

function displayOreo() {
    let mcflurreyPlaceholder = document.getElementById("McFlurrey-Placeholder");
    mcflurreyPlaceholder.style.display = "none";
    let smoresInfo = document.getElementById("Smores-info");
    smoresInfo.style.display = "none";
    let strawberryInfo = document.getElementById("Strawberry-info");
    strawberryInfo.style.display = "none";
    let confettiInfo = document.getElementById("Confetti-info");
    confettiInfo.style.display = "none";
    let oreoInfo = document.getElementById("Oreo-info");
    oreoInfo.style.display = "block";
    let skorInfo = document.getElementById("SKOR-info");
    skorInfo.style.display = "none";
    let smartiesInfo = document.getElementById("Smarties-info");
    smartiesInfo.style.display = "none";
}

function displaySkor() {
    let mcflurreyPlaceholder = document.getElementById("McFlurrey-Placeholder");
    mcflurreyPlaceholder.style.display = "none";
    let smoresInfo = document.getElementById("Smores-info");
    smoresInfo.style.display = "none";
    let strawberryInfo = document.getElementById("Strawberry-info");
    strawberryInfo.style.display = "none";
    let confettiInfo = document.getElementById("Confetti-info");
    confettiInfo.style.display = "none";
    let oreoInfo = document.getElementById("Oreo-info");
    oreoInfo.style.display = "none";
    let skorInfo = document.getElementById("SKOR-info");
    skorInfo.style.display = "block";
    let smartiesInfo = document.getElementById("Smarties-info");
    smartiesInfo.style.display = "none";
}

function displaySmarties() {
    let mcflurreyPlaceholder = document.getElementById("McFlurrey-Placeholder");
    mcflurreyPlaceholder.style.display = "none";
    let smoresInfo = document.getElementById("Smores-info");
    smoresInfo.style.display = "none";
    let strawberryInfo = document.getElementById("Strawberry-info");
    strawberryInfo.style.display = "none";
    let confettiInfo = document.getElementById("Confetti-info");
    confettiInfo.style.display = "none";
    let oreoInfo = document.getElementById("Oreo-info");
    oreoInfo.style.display = "none";
    let skorInfo = document.getElementById("SKOR-info");
    skorInfo.style.display = "none";
    let smartiesInfo = document.getElementById("Smarties-info");
    smartiesInfo.style.display = "block";
}

document.addEventListener("DOMContentLoaded", load);