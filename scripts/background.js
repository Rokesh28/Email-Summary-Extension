chrome.runtime.onInstalled.addListener(() => {
  console.log("Email Summary Extension Installed.");
});

chrome.alarms.create("keepAlive", { periodInMinutes: 5 });

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "keepAlive") {
    console.log("Service Worker is running...");
  }
});
