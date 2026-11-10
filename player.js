// Movement onsets in the NYO Canada Calgary MP3; tied to this recording.
const movements = [
  { planet: "mars", start: 0 },
  { planet: "venus", start: 383.4 },
  { planet: "mercury", start: 843.2 },
  { planet: "jupiter", start: 1087.7 },
  { planet: "saturn", start: 1554.4 },
  { planet: "uranus", start: 2100.6 },
  { planet: "neptune", start: 2452.8 },
];
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const favicon = document.getElementById("favicon");
const playbackStatus = document.getElementById("playback-status");
const rows = document.querySelectorAll(".movements li");
let activePlanet;
let needsActivation = false;

function showStatus(message) {
  playbackStatus.textContent = message;
  playbackStatus.hidden = !message;
}

function updateProgress() {
  progress.value = audio.currentTime;
  let movement = movements[0];
  for (const candidate of movements) {
    if (audio.currentTime >= candidate.start) movement = candidate;
  }
  if (movement.planet === activePlanet) return;

  activePlanet = movement.planet;
  favicon.href = `./favicons/${activePlanet}.svg`;
  for (const row of rows) {
    if (row.dataset.planet === activePlanet) {
      row.setAttribute("aria-current", "true");
      progress.style.setProperty("--progress-color", getComputedStyle(row).getPropertyValue("--planet-color"));
    } else {
      row.removeAttribute("aria-current");
    }
  }
}

async function startPlayback() {
  try {
    await audio.play();
  } catch (error) {
    if (error.name === "NotAllowedError") {
      needsActivation = true;
      showStatus("Tap anywhere or press Enter to start listening.");
    } else if (error.name !== "AbortError") {
      showStatus("The recording couldn't play. Please reload the page.");
    }
  }
}

function initialize() {
  if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
    showStatus("The recording couldn't load. Please reload the page.");
    return;
  }
  progress.max = audio.duration;
  audio.currentTime = Math.random() * audio.duration;
  updateProgress();
}

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("playing", () => {
  needsActivation = false;
  showStatus("");
});
audio.addEventListener("error", () => {
  needsActivation = false;
  showStatus("The recording couldn't load. Please reload the page.");
});

// A gesture only starts blocked autoplay; it never pauses or seeks playback.
document.addEventListener("click", (event) => {
  if (needsActivation && !event.target.closest("a")) startPlayback();
});
document.addEventListener("keydown", (event) => {
  if (needsActivation && !event.repeat && ["Enter", " "].includes(event.key) && !event.target.closest("a")) {
    event.preventDefault();
    startPlayback();
  }
});

if (audio.readyState >= 1) initialize();
else audio.addEventListener("loadedmetadata", initialize, { once: true });
startPlayback();
