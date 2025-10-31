var bgMusic = document.getElementById("bgMusic");

    function toggleAudioLoop() {
        if (bgMusic.paused) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
}