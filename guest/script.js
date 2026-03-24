import { db, ref, onValue } from "../shared/firebase.js";
import { tracks } from "../shared/tracks.js";

const audio = document.getElementById("audio");
const songText = document.getElementById("song");

let started = false;

window.start = () => {
  started = true;
};

onValue(ref(db, "radio"), (snapshot) => {
  if (!started) return;

  const data = snapshot.val();
  if (!data) return;

  const { currentTrack, startTime } = data;
  const track = tracks[currentTrack];

  if (!track) return;

  const now = Date.now();
  const offset = (now - startTime) / 1000;

  audio.src = track.file;
  audio.currentTime = offset;
  audio.play();

  songText.innerText = `${track.title} - ${track.artist}`;
});
