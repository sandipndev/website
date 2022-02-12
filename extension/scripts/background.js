const sendDetails = async (object, HOME_PAGE_URL, HOME_PAGE_PASWORD) => {
  chrome.storage.local.get(['videoUrl', 'isPlaying', 'videoTitle', 'channel'],
    ({ videoUrl, isPlaying, videoTitle, channel }) => {

      if (
        videoUrl === object.videoUrl &&
        isPlaying === object.isPlaying &&
        videoTitle === object.videoTitle &&
        channel === object.channel
      ) return;

      chrome.storage.local.set(object);
      fetch(HOME_PAGE_URL + "/api/youtube/set", {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + HOME_PAGE_PASWORD
        }
      }).catch(console.error);
    })
}

const urlRegex = /^https?:\/\/(?:[^./?#]+\.)?youtube\.com/;

chrome.browserAction.onClicked.addListener((tab) => {
  if (urlRegex.test(tab.url)) {
    chrome.tabs.sendMessage(tab.id, { text: 'report_nowPlayingYT' })
  }
})

chrome.runtime.onMessage.addListener(async (req, sender) => {
  if (urlRegex.test(sender.tab.url)) {
    console.log(req)
    await sendDetails(req, "https://sandipan.dev", "simplePassword");
  }
})

// Just so that we never die
chrome.alarms.create('refresh', { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(() => {
  chrome.tabs.query(
    {},
    (tabArray) => {
      console.log(tabArray)
      tabArray.forEach(({ id }) =>
        chrome.tabs.sendMessage(id, { text: 'report_nowPlayingYT' })
      )
    });
});
