//
// Window load event
//
window.addEventListener('load', () => {
    //
    // Global variables
    //
    let isNavMobileOpen = false;
    //
    // HTML elements
    //
    const navbarMobile = document.querySelector('.nav-mobile');
    const footer = document.querySelector('.footer');
    //
    // Function to check ScrollPosition
    //
    const checkScrollPosition = (scroll) => {
        if (isNavMobileOpen) {
            if (scroll < 300) {
            navbarMobile.classList.remove('d-flex');
            navbarMobile.classList.add('d-none');
            } else if (scroll >= 300 && scroll < (footer.offsetTop - 1000)) {
            navbarMobile.classList.remove('d-none');
            navbarMobile.classList.add('d-flex');
            } else if (scroll > (footer.offsetTop - 1000)) {
            navbarMobile.classList.remove('d-flex');
            navbarMobile.classList.add('d-none');
            }
        }
    };
    //
    // Window scroll event
    //
    window.addEventListener('scroll', () => {
        if (window.innerWidth < 1200 && isNavMobileOpen) {
            const scroll = window.pageYOffset;
            checkScrollPosition(scroll);
        }
    });
    //
    // Window scroll event
    //
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1200) {
            isNavMobileOpen = true;
        } else {
            isNavMobileOpen = false;
            navbarMobile.classList.remove('d-flex');
            navbarMobile.classList.add('d-none');
        }
    });
});

