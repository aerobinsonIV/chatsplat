console.log("I am the content script")

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.data);
        // do something with the data
    });

console.log("Listener has been added!")