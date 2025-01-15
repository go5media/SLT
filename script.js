document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('backgroundVideo');

    video.addEventListener('timeupdate', () => {
        // Restart video slightly before the end to ensure seamless loop
        if (video.currentTime > video.duration - 0.1) {
            video.currentTime = 0; // Reset to start
            video.play(); // Start playback again
        }
    });
});


    function toggleMenu() {
        const menu = document.querySelector('.nav-menu');
        menu.classList.toggle('active'); // Add/remove 'active' class
    }

