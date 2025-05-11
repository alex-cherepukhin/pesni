document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.verse-toggle');

    toggles.forEach(toggle => {
        const content = toggle.nextElementSibling;
        if (content && content.classList.contains('verse-content')) {
            toggle.addEventListener('click', () => {
                content.classList.toggle('collapsed');
            });
        }
    });
});