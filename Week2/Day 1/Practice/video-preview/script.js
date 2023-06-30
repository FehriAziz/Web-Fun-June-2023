console.log("page loaded...");

var video = document.getElementById('myVideo');

video.addEventListener('mouseover', () => {
  video.play();
});

video.addEventListener('mouseout', () => {
  video.pause();
});