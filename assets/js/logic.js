// Varibles
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var choicesEl = quizQuestions[0].choices
console.log(choicesEl)



startScreenEl.addEventListener("click", hideStartScreen);
startScreenEl.addEventListener("click", showQuizQuestions);


function hideStartScreen() {
    startScreenEl.style.display = 'none';
    questionsEl.removeAttribute("class");
}

function showQuizQuestions(){
// questionsEl.style.display ='block';
for (var i = 0; i < quizQuestions.length; i++) {
    console.log(quizQuestions[i].question);
    
}
}












