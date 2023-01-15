function printStuff() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {data: "Data from popup script"}, function(response) {
            htmlObject = stringToHTML(response)
            console.log(htmlObject)
            console.log(copyText(htmlObject));
        });
    });
}

function stringToHTML(inputString){
    let parser = new DOMParser();
    let htmlObject = parser.parseFromString(inputString, "text/html");
    return htmlObject
}


//copy text: get answer and question text of the webpage
function copyText(htmlObject){
    let questions = htmlObject.getElementsByClassName("min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap")
    let answers = htmlObject.getElementsByClassName("markdown prose w-full break-words dark:prose-invert light")
    questionText(questions)
    getAnswerText(answers)
}

function parseAnswer (answer) {
}

function questionText (questions) {
    questionText = []
    
    for(i=0; i<questions.size; i++){
        console.log(questions[i].innerText)
    }
}

// TODO get rid of console logs, make statements that convert the HTML to markdown
function getAnswerText(answers) {
    for(i=0; i<answers.length; i++){
        let childElements = answers[i].children
        for(j=0; j<childElements.length; j++){
            if(childElements[j].tagName === 'OL'|| childElements[j].tagName === 'UL'){
                let listElements = childElements[j].children
                for(k=0; k<listElements.length; k++) {
                    console.log("- " + listElements[k].innerText)
                }
            } else if(childElements[j].tagName === 'PRE') {
                // console.log(childElements[j])
                continue
            } else if(childElements[j].tagName === 'P') {
                console.log(childElements[j].innerText)
            } else {
                console.log("how did we get here")
            }
        }
    }
    
    //for loop through answers array
    // get children of answer list
    // for loop through children
    //collect pre tag html 
    
    
    //does this answer have more div tags in here?
    
    //pre -> div bg-black mb-4 rounded-md -> 
    //class where code is going to be located
    //"p-4 overflow-y-auto"
}

function extractCode (preHTML){
    codeDiv = preHTML.getElementsByTagName("code")[0]
    console.log(codeDiv);
}

//copy text: get answer and question text of the webpage
function copyText () {
    let questions = document.getElementsByClassName("min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap")
    let answers = document.getElementsByClassName("markdown prose w-full break-words dark:prose-invert light")
    questionText(questions)
    getAnswerText(answers)
}

document.getElementById("parseBtn").addEventListener("click", printStuff)
