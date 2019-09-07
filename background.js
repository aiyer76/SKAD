
chrome.runtime.onInstalled.addListener(function() {
    console.log('Loaded successfully.');
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: ''},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
