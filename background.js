chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  chrome.storage.sync.get({ active: false }, function (data) {
    const active = !data.active;

    chrome.storage.sync.set({ active }, function () {
      const iconPath = active ? "active.png" : "inactive.png";

      chrome.action.setIcon({ path: iconPath });

      const msg = { active };
      chrome.tabs.query({}, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
          chrome.tabs.sendMessage(tabs[i].id, msg);
        }
      });
    });
  });
}
