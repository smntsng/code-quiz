// GlobalVaribles
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var questionIndex = 0;

// starting quiz
startScreenEl.addEventListener("click", Start);

function Start() {
    // hide starting quiz content
    startScreenEl.style.display = 'none';
    // remove the hide css properties from the questions element
    questionsEl.removeAttribute("class");
}

// function to show questions
function showQuizQuestions(){
    // varible to target the quiz questions and the index of the array
    var currentQuestion = quizQuestions[questionIndex];
    // varible to target the question title element
    var titleEl = document.getElementById("question-title");
    // set the current question to the title element using textContent ()
    titleEl.textContent = currentQuestion.question;
}

showQuizQuestions();












