document.addEventListener('DOMContentLoaded', function() {
    //// Handle section transitions when navigation links are clicked
    // Create function to hide all sections
    function hideAllSections() {
        document.querySelectorAll('body > *').forEach(element => {
                element.classList.remove('block', 'flex');
                element.classList.add('hide');
        });
    };

    function hideMostSections() {
        document.querySelectorAll('body > *').forEach(element => {
            if (!element.matches('#mobileHeader') && !element.matches('#navBar')) {
                element.classList.remove('block', 'flex');
                element.classList.add('hide');
            }
        });
    };

    // Create function to show a section with a specific display
    function showSection(selector, displayType) {
        const section = document.querySelector(selector);
        if (section) {
            section.classList.remove('hide');
            section.classList.add(displayType);
        }
    };
    
    // Hide all sections upon arrival
    hideAllSections();

    // Keep intro animations visible
    showSection('#intro', 'flex');

    // Listen for the end of the intro animation
    const introLogo = document.getElementById('introLogo');

    introLogo.addEventListener('animationend', function(event) {
        // Make sure the event listener listens to the last animation of the sequence
        if (event.animationName === 'slideOutToUpperRight') {

            hideAllSections();
            showSection('#mobileHeader', 'flex')
            showSection('#navBar', 'block');
            showSection('#aboutMe', 'block');
        }
    });

    function handleNavigation(event) {
        // Check if event is a click or the enter key
        if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
            event.preventDefault();

            const sectionID = this.getAttribute('href').substring(1);
            const displayType = document.getElementById(sectionID).dataset.displayType;

            hideMostSections();
            showSection('#' + sectionID, displayType); // Reveal clicked section
            document.getElementById(sectionID).classList.add('rise-up');
        }
    }

    document.querySelectorAll('#navBarItems > li > a').forEach(link => {
        link.addEventListener('click', handleNavigation);
        link.addEventListener('keydown', handleNavigation); // Ensure screen readers can navigate through navigation bar
    });

    /*
    // Add click event listeners to navigation links
    document.querySelectorAll('#navBarItems > li > a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const sectionID = this.getAttribute('href').substring(1);
            const displayType = document.getElementById(sectionID).dataset.displayType;

            hideMostSections();
            showSection('#' + sectionID, displayType); // Reveal clicked section
            document.getElementById(sectionID).classList.add('rise-up');
        });
    });
    */
    
    //// Handle language menu dropdown toggle
    const langSelect = document.getElementById('langSelect');
    const langOptions = document.getElementById('langOptions');

    langSelect.addEventListener('click', function() {
        langOptions.classList.toggle('slide-out-initial');
        langOptions.classList.toggle('slide-out-final');
    });
    
    //// Handle navigation toggling for mobile devices
    const navBar = document.getElementById('navBar');

    if (window.innerWidth < 768) {
        navBar.style.animation = 'mobileSlideIn 2s cubic-bezier(0, 1, 0, 1)'; // Apply initial animation to navigation bar for mobile
    } else {
        navBar.style.animation = 'slideInFromLeft 2s cubic-bezier(0, 1, 0, 1)'; // Apply initial animation to navigation bar for mobile
    }
    
    navBar.addEventListener('animationend', () => { // Ensure the initial animation has run its course
        navBar.style.animation = ''; // Remove animation to allow additional toggeable translations

        const navToggle = document.getElementById('navigationToggle'); // Grab the toggle button

        // Add a click-based event listener
        navToggle.addEventListener('click', () => {
            const visibility = navBar.getAttribute('data-visibility'); // Access data attribute

            if (visibility === 'false') {
                navBar.setAttribute('data-visibility', 'true');
            } else if (visibility === 'true') {
                navBar.setAttribute('data-visibility', 'false')
            }   
        });
    });
    
    // Handle project card heights and thumbnail aspect-ratios
    // const projectCards = document.querySelectorAll('.project-card');
    // let maxHeight = 0;

    // Find tallest card
    // projectCards.forEach(function(card) {
    //     let cardHeight = card.clientHeight;
        
    //     if (cardHeight > maxHeight) {
    //         maxHeight = cardHeight;
    //     }

        // Set thumbnails equal to 25% of card height
        // let imageHeight = cardHeight * 0.25;
        // let image = card.querySelector('.project-thumbnail');
        // image.style.height = imageHeight + 'px';
    // });

    // Set all cards equal to tallest card height
    // projectCards.forEach(function(card) {
    //     card.style.height = maxHeight + 'px'
    // });   
    
    //// Handle drop-down toggle for Education section
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

    /* //// Manage dynamic content accessibility
    document.querySelectorAll('.skill-card').forEach(card => {
        card.setAttribute('tabindex', '0'); // Make each card focusable
        card.setAttribute('role', 'button'); // Indicate interactivity
        card.setAttribute('aria-expanded', 'false'); // Set attribute to intialize as collapsed

        card.addEventListener('keydown', function(event) {
            if (event.keyCode === 13 || event.keyCode === 32) { // Provide functionality to enter or space key
                const subSkillsContainer = this.querySelector('.slide-out-initial'); // Grab the subskill cards container
                
                if (subSkillsContainer) {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', !isExpanded); // Toggle expanded state

                    if (!isExpanded) {
                        const firstSubSkill = subSkillsContainer.querySelector('.skill-card');
                        if (firstSubSkill) {
                            firstSubSkill.setAttribute('tabindex', '0');
                            firstSubSkill.focus();
                        }
                    }
                }
            }
        });
    }); */
});