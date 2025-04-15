document.addEventListener("DOMContentLoaded", function () {
    // Délai avant de lancer la vidéo (en millisecondes)
    const delayBeforeVideo = 5000; // 5 secondes

    // Lance la vidéo après le délai
    setTimeout(playVideo, delayBeforeVideo);

    // Délai avant de commencer l'animation (en millisecondes)
    const delayBeforeAnimation = 2000; // 2 secondes

    // Texte à afficher lettre par lettre
    const textToDisplay = "Maintenant que vous savez tout.... vous m'appartiendrais !!!";
    const animationSpeed = 100; // Temps entre chaque lettre (en millisecondes)

    // Fonction pour afficher le texte lettre par lettre
    function typeText() {
        const textContainer = document.createElement("div");
        textContainer.style.position = "fixed";
        textContainer.style.top = "50%";
        textContainer.style.left = "50%";
        textContainer.style.transform = "translate(-50%, -50%)";
        textContainer.style.color = "white";
        textContainer.style.fontSize = "2em";
        textContainer.style.fontFamily = "'Courier New', Courier, monospace";
        textContainer.style.textAlign = "center";
        textContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        textContainer.style.padding = "20px";
        textContainer.style.borderRadius = "10px";
        textContainer.style.zIndex = "9999";
        document.body.appendChild(textContainer);

        let index = 0;

        function displayNextLetter() {
            if (index < textToDisplay.length) {
                textContainer.textContent += textToDisplay[index];
                index++;
                setTimeout(displayNextLetter, animationSpeed);
            } else {
                // Une fois le texte affiché, fermer la page après un délai
                setTimeout(function () {
                    window.close(); // Ferme la page
                }, 3000); // Délai avant de fermer la page (3 secondes)
            }
        }

        displayNextLetter();
    }

    // Lance l'animation après le délai
    setTimeout(typeText, delayBeforeAnimation);
});