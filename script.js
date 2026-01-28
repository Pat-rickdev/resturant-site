
// Function to toggle the mobile menu
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}
// Function to toggle mobile menu (Keep this from before)
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// --- SCROLL EFFECT: HIDE LOGO ONLY ---
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // If scrolled down more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('hide-logo-on-scroll');
    } else {
        // If back at the top
        navbar.classList.remove('hide-logo-on-scroll');
    }
});