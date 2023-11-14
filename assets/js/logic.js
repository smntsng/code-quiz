// GlobalVaribles
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var questionIndex = 0;
var choicesEl =document.getElementById("choices");

// starting quiz
startScreenEl.addEventListener("click", Start);

function Start() {
    // hide starting quiz content
    startScreenEl.style.display = 'none';
    // remove the hide css properties from the questions element
    questionsEl.removeAttribute("class");

    showQuizQuestions();
    startimer();
}

// funciton to start timer
function startimer() {
// creating a varible with the number 75
   var timeLeft = 75;
//    assigning the innerhtml with the id time with the time left var of 75
    document.getElementById("time").innerHTML = 75;
// 
   var timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").innerHTML = timeLeft;
    }
    , 1000);
}


// function to show questions
function showQuizQuestions(){
    // clear previous choices 
choicesEl.innerHTML = "";
    // varible to target the quiz questions and the index of the array
    var currentQuestion = quizQuestions[questionIndex];
    // varible to target the question title element
    var titleEl = document.getElementById("question-title");
    // set the current question to the title element using textContent ()
    titleEl.textContent = currentQuestion.question;

//    iterates through the choices array
    currentQuestion.choices.forEach(function(choicesindex,) {
        // create choices button
        var choicesBtn = document.createElement("button");
        choicesBtn.id = "button";
        // targeting button element to display the choices
        choicesBtn.textContent =  choicesindex;
        // display on the page
        choicesEl.appendChild(choicesBtn);

        choicesBtn.addEventListener("click", function(event) {

            console.log(event.target.innerText);

            if (event.target.innerText === currentQuestion.answer) {
                questionIndex++;
                showQuizQuestions();
            } else {
                console.log("Incorrect!");
            }
        });
    });
}











