document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navList = document.querySelector('.nav-list');

    mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        
        // Change icon based on state
        const icon = mobileToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('ri-menu-line');
            icon.classList.add('ri-close-line');
        } else {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-line');
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            }
        });
    });

    // Smooth scroll offset for sticky header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
