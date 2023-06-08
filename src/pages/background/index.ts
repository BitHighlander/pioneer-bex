import reloadOnUpdate from "virtual:reload-on-update-in-background-script";
// import { SDK } from "@pioneer-sdk/sdk";
// import { v4 as uuidv4 } from "uuid";
reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded");
/*
    Pioneer background tasks
 */
const onStart = async function () {
  console.log("onStart function entered"); // Added for debugging

  try {
    chrome.storage.local.get(
      ["serviceKey", "queryKey", "username"],
      function (result) {
        console.log("serviceKey: ", result.serviceKey);
        console.log("queryKey: ", result.queryKey);
        console.log("username: ", result.username);
        // Rest of your code...
      }
    );
  } catch (e) {
    console.error("Error caught in onStart function: ", e); // Improved error logging
  }
};

chrome.runtime.onStartup.addListener(() => {
  console.log("onStartup event fired");
  //onStart();
});

chrome.tabs.onCreated.addListener(() => {
  console.log("onCreated event fired");
  //onStart();
});

chrome.action.onClicked.addListener((tab) => {
  console.log("onClicked event fired");
  //onStart();
});

// Listen for when a tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("onUpdated event fired");
  // Check if the update event is fired because the page is finished loading
  if (changeInfo.status === "complete") {
    console.log("onUpdated event fired 2");
    //onStart();
  }
});
