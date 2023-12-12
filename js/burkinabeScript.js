document.addEventListener('DOMContentLoaded', function() {
    function alignLogo() {
    
        // Ensure the color transitions on the flag and the logo always align
        let flag = document.getElementById('burkinabeFlag');
        let logo = document.getElementById('burkinabeJ3Logo');
        
        // Determine height of the logo
        let flagRect = flag.getBoundingClientRect();
        let flagSplitPosition = flagRect.height * 0.5;
        let logoSplitRatio = 125 / 225;
        let logoTopOffset = flagSplitPosition - (logo.offsetHeight * logoSplitRatio);

        // Align logo with flag
        logo.style.top = logoTopOffset + 'px';

        // Keep logo 25% from the left
        logo.style.left = 'calc(25% - ' + (logo.offsetHeight / 2) + 'px)';
    };
    
    // Run the function on initial load
    alignLogo();

    // Run the function as the page is resized
    window.addEventListener('resize', alignLogo);    
});