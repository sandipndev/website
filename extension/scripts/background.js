const sendDetails = async (object, HOME_PAGE_URL, HOME_PAGE_PASWORD) => {
  console.log(object)
  await fetch(HOME_PAGE_URL + "/api/youtube/set", {
    method: "POST",
    body: JSON.stringify(object),
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + HOME_PAGE_PASWORD
    }
  });
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
