document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-conference');
    const conferenceSection = document.getElementById('conference-publications');
    
    if (toggleButton && conferenceSection) {
        toggleButton.addEventListener('click', function() {
            if (conferenceSection.classList.contains('hidden')) {
                conferenceSection.classList.remove('hidden');
                this.textContent = 'Hide Conference Publications';
            } else {
                conferenceSection.classList.add('hidden');
                this.textContent = 'Show Conference Publications';
            }
        });
    }
});
