chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Popup script requested HTML");
        
        chatDivXpath = "/html/body/div[1]/div[1]/div[1]/main/div[1]/div/div"

        let iterator = document.evaluate(chatDivXpath, document, null, XPathResult.ANY_TYPE, null);
        let nodes = [];
        let current = iterator.iterateNext();
        while (current) {
            nodes.push(current.innerHTML);
            current = iterator.iterateNext();
        }
        let htmlString = nodes.join("");

        sendResponse(htmlString);
    });