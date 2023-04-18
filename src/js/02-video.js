import Player from "@vimeo/player";
import throttle from "lodash.throttle";

// const videoPlayer = document.querySelector("iframe");
// const video = new Vimeo.Player(iframe);

// player.on('play', function () {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });

const videoPlayer = document.getElementById("vimeo-player");
const video = new Player(videoPlayer);

function saveTime(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
};

const saveTimeDelayed = throttle(saveTime, 1000);

const saveCurrentTime = localStorage.getItem("videoplayer-current-time");

video.setCurrentTime(saveCurrentTime);
video.on("timeupdate", saveTimeDelayed);

// test