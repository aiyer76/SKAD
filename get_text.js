chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.scrape === true) {
        console.log(document.getElementsByTagName('title'));
        sendResponse({messageStatus: "received"});
    }
})