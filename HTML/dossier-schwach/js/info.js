document.addEventListener('DOMContentLoaded', function() {
    // Système de notation par étoiles
    const stars = document.querySelectorAll('.star');
    const currentRating = document.getElementById('current-rating');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            
            // Mettre à jour l'affichage
            stars.forEach(s => {
                s.classList.toggle('active', parseInt(s.getAttribute('data-value')) <= value);
            });
            
            // Afficher la note actuelle
            currentRating.textContent = value;
            
            // Envoyer la note au serveur (simulation)
            setTimeout(() => {
                alert(`Merci d'avoir noté le film ${value} étoiles!`);
            }, 300);
        });
        
        // Effet hover
        star.addEventListener('mouseover', function() {
            const value = parseInt(this.getAttribute('data-value'));
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= value) {
                    s.style.color = 'gold';
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            stars.forEach(s => {
                if (!s.classList.contains('active')) {
                    s.style.color = '#737373';
                }
            });
        });
    });

    // Animation des cartes de monstres
    const monsterCards = document.querySelectorAll('.monster-card');
    monsterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 20px rgba(229, 9, 20, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});