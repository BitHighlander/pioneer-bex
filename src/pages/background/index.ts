import reloadOnUpdate from "virtual:reload-on-update-in-background-script";
import { SDK } from "@pioneer-sdk/sdk";

reloadOnUpdate("pages/background");
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded bro");

chrome.runtime.onInstalled.addListener(function () {
  console.log("chrome object: ", chrome);
  if (chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(
      ["serviceKey", "queryKey", "username"],
      function (result) {
        console.log("serviceKey: ", result.serviceKey);
        console.log("queryKey: ", result.queryKey);
        console.log("username: ", result.username);
      }
    );
  } else {
    console.log("chrome.storage or chrome.storage.local is not defined");
  }
});

chrome.runtime.onStartup.addListener(() => {
  console.log("onStartup event fired");
  onStart();
});

function onStart() {
  console.log("Sending start message...");
  chrome.runtime.sendMessage({ message: "start" }, function (response) {
    console.log("Response from background script: ", response);
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message received in background script: ", request);
  if (request.message === "start") {
    sendResponse({ message: "Started" });
  }
});
