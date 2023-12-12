document.addEventListener('DOMContentLoaded', function() {
    // Handle language menu dropdown text replacement
    const langSelect = document.getElementById('langSelect');
    const langOptions = document.getElementById('langOptions');

    langSelect.addEventListener('click', function() {
        langOptions.classList.toggle('slide-out-initial');
        langOptions.classList.toggle('slide-out-final');
    });
    
    // Handle navigation toggling for mobile devices
    const navBar = document.getElementById('navBar');
    const navToggle = document.getElementById('navigationToggle');

    navToggle.addEventListener("click", () => {
        const visibility = navBar.getAttribute('data-visibility');

        console.log(visibility)
        if (visibility === 'false') {
            navBar.setAttribute('data-visibility', 'true');
        } else if (visibility === 'true') {
            navBar.setAttribute('data-visibility', 'false')
        }   
    });
    
    // Handle project card heights and thumbnail aspect-ratios
    const projectCards = document.querySelectorAll('.project-card');
    let maxHeight = 0;

    // Find tallest card
    projectCards.forEach(function(card) {
        let cardHeight = card.offsetHeight;
        
        if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
        }

        // Set thumbnails equal to 25% of card height
        // let imageHeight = cardHeight * 0.25;
        // let image = card.querySelector('.project-thumbnail');
        // image.style.height = imageHeight + 'px';
    });

    // Set all cards equal to tallest card height
    projectCards.forEach(function(card) {
        card.style.height = maxHeight + 'px'
    });   
    
    // Initialize drop-down toggle for Education section
    document.querySelectorAll('.dropdown').forEach(function(dropdownButton) {
        dropdownButton.addEventListener('click', function() {
            // Find the nearest course-container related to this dropdown button
            let courseContainer = dropdownButton.closest('.dropdown-container').querySelector('.course-container');
    
            if (courseContainer) {
                courseContainer.classList.toggle('slide-out-initial');
                courseContainer.classList.toggle('slide-out-final');
            }
        });
    });
});