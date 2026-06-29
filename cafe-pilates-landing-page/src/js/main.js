document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link[href^="#"], a.btn-primary-custom[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            // Cerrar cualquier overlay de planes abierto al navegar por el menú
            closeOverlay();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    document.querySelectorAll('.fade-in-section, .feature-card, .plan-card, .sede-select-card').forEach(el => {
        if (!el.classList.contains('fade-in-section')) {
            el.classList.add('fade-in-section');
        }
        observer.observe(el);
    });

    // Overlay de planes por sede
    function openOverlay(sedeId) {
        const overlay = document.getElementById('overlay-' + sedeId);
        if (!overlay) return;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        overlay.scrollTop = 0;
        document.body.style.overflow = 'hidden';

        // Animar plan-cards dentro del overlay
        overlay.querySelectorAll('.plan-card').forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(24px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 + i * 100);
        });
    }

    function closeOverlay() {
        document.querySelectorAll('.planes-overlay.is-open').forEach(overlay => {
            overlay.classList.add('is-closing');
            overlay.classList.remove('is-open');
            overlay.setAttribute('aria-hidden', 'true');
            overlay.addEventListener('transitionend', function onEnd() {
                overlay.classList.remove('is-closing');
                overlay.removeEventListener('transitionend', onEnd);
            }, { once: true });
        });
        document.body.style.overflow = '';
    }

    // Click en tarjetas de sede
    document.querySelectorAll('.sede-select-card').forEach(card => {
        card.addEventListener('click', () => openOverlay(card.dataset.sede));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openOverlay(card.dataset.sede);
            }
        });
    });

    // Botones "Volver"
    document.querySelectorAll('[data-close-overlay]').forEach(btn => {
        btn.addEventListener('click', closeOverlay);
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeOverlay();
    });
});
