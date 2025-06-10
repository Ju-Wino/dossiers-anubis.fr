document.addEventListener('DOMContentLoaded', function() {
    // Gestion des onglets
    const tabButtons = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.auth-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Mettre à jour les onglets
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Afficher le bon formulaire
            forms.forEach(form => form.classList.remove('active'));
            document.getElementById(`${tabId}-form`).classList.add('active');
        });
    });

    // Basculer la visibilité du mot de passe
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    // Validation des formulaires
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Remplace par ton ID/mdp souhaité
    const validEmail = "georges.schwach";
    const validPassword = "7049";

    if (email === validEmail && password === validPassword) {
        window.open("_blank");
    } else {
        alert("Identifiants incorrects.");
    }
});


    signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Remplacer le formulaire par un message subtilement inquiétant
    signupForm.innerHTML = `
        <div class="signup-blocked">
            <h2>Inscription désactivée</h2>
            <p>Cette section est définitivement fermée.</p>
            <p class="note">Merci de vous connectez avec les identifiants qui vous ont étés attribués.</p>
        </div>
    `;
});


    // Animation des labels
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        // Vérifier si le champ a déjà une valeur au chargement
        if (input.value) {
            input.nextElementSibling.style.top = '10px';
            input.nextElementSibling.style.transform = 'none';
            input.nextElementSibling.style.fontSize = '0.8rem';
        }
    });
});