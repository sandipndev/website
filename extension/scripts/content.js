const urlRegex = /^https?:\/\/(?:[^./?#]+\.)?youtube\.com.*/;

chrome.runtime.onMessage.addListener(function (msg) {
  if (urlRegex.test(window.location.href) && msg.text === 'report_nowPlayingYT') {
    console.debug("[YT Activity Fetcher]: Sending YT Info")
    const video = document.querySelector("video");
    const object = {
      currentTime: video.currentTime,
      duration: video.duration,
      videoUrl: window.location.href,
      isPlaying: !video.paused,
      videoTitle: document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer").innerText,
      channel: document.querySelector(".ytd-video-secondary-info-renderer .style-scope.ytd-channel-name a").innerText
    };
    chrome.runtime.sendMessage(object);
  }
});
