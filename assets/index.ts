import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

import fetchCommentsData from "./data/comments.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playButton:HTMLElement = document.querySelector("#playPause");
const soundButton:HTMLElement = document.querySelector("#muteUnmute");

playButton.onclick = () => player.togglePlay();

soundButton.onclick = () => player.toggleSound();

const fetchComments = async () => {
  const comments = await fetchCommentsData();
  const commentsList = document.querySelector("#commentsList");

  commentsList.innerHTML = comments
    .map(({ comment }) => `<li>${comment}</li>`)
    .join("<br/>");
};

/** MAIN */
fetchComments();

if ("serviceWorker" in navigator) {
   navigator.serviceWorker.register("/sw.js").catch((error)=>{
     console.log(error)
   })
}
