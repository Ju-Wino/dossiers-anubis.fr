document.addEventListener("DOMContentLoaded", function () {
    const shandrahaElement = document.getElementById("shandraha");

    // Vérifie si c'est la première visite
    const hasVisited = localStorage.getItem("visitedShandraha");

    if (!hasVisited) {
        // Si c'est la première visite, déclenche un "bug" après un délai
        setTimeout(function () {
            console.error("Erreur sur la page Shandraha!");
            window.location.href = "Dur_shan.html"; // Redirige vers Dur_shan.html
        }, 5000); // Temps avant le "bug" (5 secondes)

        // Marque la page comme visitée
        localStorage.setItem("visitedShandraha", "true");
    }

    // Ajoute un événement pour ramener l'utilisateur sur Shandraha après un clic
    if (shandrahaElement) {
        shandrahaElement.addEventListener("click", function () {
            console.log("Retour sur la page Shandraha !");
            setTimeout(function () {
                window.location.href = "Shandraha.html"; // Retourne sur Shandraha.html
            }, 3000); // Temps avant de revenir (3 secondes)
        });
    }
});