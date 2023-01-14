function uwu() {
    alert("uwu")
}

//copy text: get answer and question text of the webpage
function copyText () {
    let questions = document.getElementsByClassName("min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap")
    let answers = document.getElementsByClassName("markdown prose w-full break-words dark:prose-invert light")
}

function parseAnswer (answer) {
}

function questionText (questions) {
    questionText = []
    
    for(i=0; i<questions.size; i++){
        questionText[i] = questions[i].innerText
    }
    return questionText
}

// gets the contents of a answer array
function getAnswerText (answers) {
    document.getElementsByTagName("pre")
    
    for(i=0; i<answer.size; i++){
        childElements = answer[i].children
        for(j=0; j<childElements.size; j++){
            if(childElements[j].tagName==='PRE'){
                extractCode(childElements[j])
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

function extractCode (){

}

document.getElementById("uwuBtn").addEventListener("click", uwu)