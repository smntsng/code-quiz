
// click to hide starting quiz content and show questions
var startScreenEl = document.getElementById("start-screen");


startScreenEl.addEventListener("click", hideStartScreen);
startScreenEl.addEventListener("click", showQuizQuestions);


function hideStartScreen() {
    startScreenEl.style.display = 'none';
}

function showQuizQuestions(){

// questionsEl.style.display ='block';

var QuestionsEl = quizQuestions[0].question;

for (var i = 0; i < quizQuestions.length; i++) {
    console.log(quizQuestions[i].question);
    
}
}

showQuizQuestions();











