document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .smooth-menu a');

    function setActiveLink() {
        let scrollPosition = window.scrollY + 200; // Ajuste conforme necessário

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => {
                link.parentElement.classList.remove('active');
            });

            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                const id = section.getAttribute('id');
                const activeLink = document.querySelector(`.navbar-nav .smooth-menu a[href="#${id}"]`);
                
                if (activeLink) {
                    activeLink.parentElement.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    // Também aplicar a verificação quando a página é carregada
    setActiveLink();
});
