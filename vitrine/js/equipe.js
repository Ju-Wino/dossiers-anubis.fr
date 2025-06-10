document.addEventListener('DOMContentLoaded', function() {
    // Animation au survol des cartes
    const cards = document.querySelectorAll('.team-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(229, 9, 20, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Données des membres (optionnel)
    const teamData = [
        {
            name: "Jean Dupont",
            role: "Réalisateur",
            image: "assets/team/membre1.jpg"
        },
        {
            name: "Marie Lambert",
            role: "Productrice",
            image: "assets/team/membre2.jpg"
        },
        // Ajoutez les données pour les 11 membres
    ];

    // Vous pourriez générer dynamiquement le HTML ici
    // en utilisant teamData et en l'injectant dans .team-grid
});