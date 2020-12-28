import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

import fetchCommentsData from "./data/comments.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playButton = document.querySelector("#playPause");
const soundButton = document.querySelector("#muteUnmute");

playButton.onclick = () => player.togglePlay();

soundButton.onclick = () => player.toggleSound();

const fetchComments = async () => {
  const comments = await fetchCommentsData();
  const commentsList = document.querySelector("#commentsList");

  commentsList.innerHTML = comments.map(({comment}) => `<li>${comment}</li>`).join('<br/>');
};

fetchComments();

