//JavaScript to handle mobile navigation toggle

    document.addEventListener('DOMContentLoaded', () => {
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
                
                // Toggle visibility
                mobileMenu.classList.toggle('hidden');
                
                // Update accessibility attributes
                menuBtn.setAttribute('aria-expanded', !isExpanded);
            });
        }
    });