
// click to hide starting quiz content and show questions
var startScreenEl = document.getElementById("start-screen");
var questionsTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var questionsEl = document.getElementById("questions");

startScreenEl.addEventListener("click", hideStartScreen);
startScreenEl.addEventListener("click", showQuizQuestions);


function hideStartScreen() {
    startScreenEl.style.display = 'none';
}

function showQuizQuestions(){
    questionsEl.style.display ='block';
    
}

function showQuizQ1(){
    document.getElementById("question-title").innerHTML = quizQuestions.Question1;
}










