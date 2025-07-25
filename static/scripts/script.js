// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('nav'); // Replace with your navbar selector
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const maxScroll = 200; // Distance to scroll before full opacity change
    
//     // Calculate opacity (1 to 0.3 as you scroll)
//     const opacity = Math.max(0.3, 1 - (scrollTop / maxScroll));
//     navbar.style.opacity = opacity;
// });


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-wrap');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = 200; // Distance to scroll before full background
    
    // Calculate opacity (0 to 0.9 as you scroll)
    const opacity = Math.min(0.9, scrollTop / maxScroll);
    navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});