document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du menu mobile
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Fermer le menu mobile au clic sur un lien
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // 2. Changement d'apparence de la barre de navigation au défilement
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md');
                navbar.classList.remove('bg-white/95');
                navbar.classList.add('bg-white');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.remove('bg-white');
                navbar.classList.add('bg-white/95');
            }
        });
    }

    // 3. Intersection Observer pour les animations d'apparition fluides (.reveal)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
	// Fonctions de gestion de la modale de réservation
function openBookingModal(propertyName) {
    const modal = document.getElementById('booking-modal');
    const selectedPropText = document.getElementById('selected-property');
    const formPropInput = document.getElementById('form-property');

    if (modal && selectedPropText && formPropInput) {
        selectedPropText.textContent = propertyName;
        formPropInput.value = propertyName;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Empêche le défilement en arrière-plan
    }
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Fermer la modale si l'utilisateur clique en dehors de la fenêtre blanche
window.addEventListener('click', (event) => {
    const modal = document.getElementById('booking-modal');
    if (event.target === modal) {
        closeBookingModal();
    }
});
});