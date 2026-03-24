import { db, ref, set } from "../shared/firebase.js";

window.play = () => {
  const trackId = parseInt(document.getElementById("trackId").value);

  set(ref(db, "radio"), {
    currentTrack: trackId,
    startTime: Date.now()
  });
};
