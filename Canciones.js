// Función para cambiar la canción  
function playTrack(track, title, trackElement) {  
    let audio = trackElement.closest('.player').querySelector('.audio');  
    let songTitle = trackElement.closest('.player').querySelector('.song-title');  
    
    audio.querySelector('source').src = track;  
    songTitle.textContent = title;  
    audio.load();  
    audio.play();  
}  

// Función para mostrar u ocultar la lista de canciones  
function toggleTracklist(albumElement) {  
    let tracklist = albumElement.closest('.player').querySelector('.tracklist');  
    tracklist.style.display = (tracklist.style.display === 'none' || tracklist.style.display === '') ? 'block' : 'none';  
}  

document.querySelectorAll('.video').forEach(video => {
    video.addEventListener('click', function () {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });
});