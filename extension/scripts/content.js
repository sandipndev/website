chrome.runtime.onMessage.addListener(function (msg) {
  if (msg.text === 'report_nowPlayingYT') {
    const video = document.querySelector("video");
    const object = {
      currentTime: video.currentTime,
      duration: video.duration,
      videoUrl: window.location.href,
      isPlaying: !video.paused
    };
    chrome.runtime.sendMessage(object);
  }
});
