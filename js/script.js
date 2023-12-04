document.addEventListener('DOMContentLoaded', function() {
    // Initialize drop-down toggle for Education section
    document.querySelectorAll('.dropdown').forEach(function(dropdownButton) {
        dropdownButton.addEventListener('click', function() {
            // Find the nearest course-container related to this dropdown button
            let courseContainer = dropdownButton.closest('.dropdown-container')
                                                .querySelector('.course-container');
    
            if (courseContainer) {
                courseContainer.classList.toggle('slide-out-initial');
                courseContainer.classList.toggle('slide-out-final');
            }
        });
    });
});