const playlist = "OLAK5uy_nxaAAl0akbZ3b1GtEV4I6l25bW_NFIdDI";
const movements = [
  { planet: "mars", duration: 441 },
  { planet: "venus", duration: 517 },
  { planet: "mercury", duration: 256 },
  { planet: "jupiter", duration: 456 },
  { planet: "saturn", duration: 562 },
  { planet: "uranus", duration: 363 },
  { planet: "neptune", duration: 527 },
];
const favicon = document.getElementById("favicon");
const status = document.getElementById("playback-status");
const playButton = document.getElementById("play");
let player;

// Pick uniformly across the suite's duration, then locate the movement.
let startSeconds = Math.floor(Math.random() * movements.reduce((sum, movement) => sum + movement.duration, 0));
let index = 0;
while (startSeconds >= movements[index].duration) {
  startSeconds -= movements[index].duration;
  index += 1;
}

function updateFavicon(movementIndex) {
  const movement = movements[movementIndex];
  if (movement) favicon.href = `./favicons/${movement.planet}.svg`;
}

updateFavicon(index);

window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player("player", {
    playerVars: {
      playsinline: 1,
      origin: window.location.origin,
    },
    events: {
      onReady(event) {
        event.target.getIframe().title = "The Planets — Berliner Philharmoniker and Herbert von Karajan";
        playButton.hidden = false;
        status.textContent = "Starting at a random point. Press play if playback doesn't begin.";
        event.target.unMute();
        event.target.setLoop(true);
        event.target.loadPlaylist({ list: playlist, listType: "playlist", index, startSeconds });
      },
      onStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
          updateFavicon(event.target.getPlaylistIndex());
          playButton.hidden = true;
          status.textContent = "Playing. The suite repeats automatically.";
        } else if (event.data === YT.PlayerState.PAUSED) {
          playButton.hidden = false;
          status.textContent = "Paused. Press play to continue.";
        }
      },
      onAutoplayBlocked() {
        playButton.hidden = false;
        status.textContent = "Your browser needs a click to start the music. Press play to join at the selected point.";
      },
      onError() {
        playButton.hidden = true;
        status.textContent = "YouTube couldn't play this recording here. Open it in YouTube Music below.";
      },
    },
  });
};

playButton.addEventListener("click", () => {
  player.unMute();
  player.playVideo();
});

const api = document.createElement("script");
api.src = "https://www.youtube.com/iframe_api";
api.addEventListener("error", () => {
  status.textContent = "The YouTube player couldn't load. Open the recording below.";
});
document.head.append(api);
