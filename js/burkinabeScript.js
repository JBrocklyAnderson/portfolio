document.addEventListener('DOMContentLoaded', function() {
    // Add intersection observer function
    const floatUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('float-up-visible');
            }
        });
    }, {
        root: null, // Use the viewport as bounding box
        rootMargin: '0px', // Trigger the intersection at the bottom of the page
    });

    // Grab elements to be floated up
    const floatUpElements = document.querySelectorAll('.float-up-hidden');
    floatUpElements.forEach(floatUpElement => {
        floatUpObserver.observe(floatUpElement); // Slide in the element
    });

    // Add intersection observer function
    const growForthObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('grow-forth'); // Add class that handles transition
            }
        });
    }, {
        root: null, // Use the viewport as bounding box
        rootMargin: '0px', // Trigger the intersection at the bottom of the page
    })

    // Grab elements to grow forth
    const growForthElements = document.querySelectorAll('.die-back');
    growForthElements.forEach(growForthElement => {
        growForthObserver.observe(growForthElement); // Grow forth the element
    })
    
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