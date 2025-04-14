document.addEventListener("DOMContentLoaded", function () {
    const shandrahaElement = document.getElementById("shandraha");

    if (shandrahaElement) {
        shandrahaElement.addEventListener("click", function () {
            console.error("Erreur sur la page Shandraha!");
            setTimeout(function () {
                window.location.href = "autrePage.html";
            }, 3000); 
        });
    }
});