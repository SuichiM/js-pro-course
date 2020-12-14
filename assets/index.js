import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins:[
  new AutoPlay()
] });

const playButton = document.querySelector("#playPause");
const soundButton = document.querySelector("#muteUnmute");

playButton.onclick = () => player.togglePlay();

soundButton.onclick = () => player.toggleSound();
