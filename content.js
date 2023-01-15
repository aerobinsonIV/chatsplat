chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.data);
        sendResponse("response data from content script");
    });