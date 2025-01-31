// Example: Add a visitor counter (fake for nostalgia)
const visitorCount = document.createElement('p');
visitorCount.textContent = "Visitors: 12345";
visitorCount.style.position = 'fixed';
visitorCount.style.bottom = '10px';
visitorCount.style.right = '10px';
visitorCount.style.color = '#ff00ff';
document.body.appendChild(visitorCount);

// Music player functionality
const audio = document.getElementById('background-music');

// Autoplay when page loads
document.addEventListener('DOMContentLoaded', function() {
  audio.play().catch(error => {
    // Handle browser autoplay restrictions
    console.log('Autoplay blocked. Click play to start music.');
  });
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
});

const playPauseBtn = document.getElementById("play-pause-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");

// Play/Pause button
playPauseBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// Update progress bar and time display
audio.addEventListener("timeupdate", function () {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  progressBar.value = (currentTime / duration) * 100;
  currentTimeDisplay.textContent = formatTime(currentTime);
  totalTimeDisplay.textContent = formatTime(duration);
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Set total time display
audio.addEventListener("loadedmetadata", function () {
  const totalMinutes = Math.floor(audio.duration / 60);
  const totalSeconds = Math.floor(audio.duration % 60);
  totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;
});

// Seek through the song
progressBar.addEventListener("input", function () {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});
v
