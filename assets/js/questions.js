console.log("this is the question jS")

// 2.start the quiz when i click the start quix button
//     A. add an event listener where it calls a function that then displays the questions and choices on the page
//     B. i need to make the initial start quiz button and text disapper - display none, or hide() - is there a JS mthod fot that?
//     C. display the title for the quiz
//      Iterate through an array of quizzes, diplsya the question itself from an array . content maybe
//     D.display the choice the user has for the quizes - this maybe another array, maybe another loop and diplaying textContent





  var questions = {
    // Q1

    Question1: {
        question: "Inside which HTML element do we put the JavaScript?",
        q1Choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        q1Answer: "<script>"
    },

// Q2

Question2: {
    question: "What is the correct JavaScript syntax to change the content of the HTML element: <p id=(\")demo(\")>This is a demonstration.</p>?",
    q2Choices: ["document.getElementById((\")demo(\")).innerHTML = (\")Hello World!(\");", "#demo.innerHTML = (\")Hello World!(\");", "document.getElement((\")p(\")).innerHTML = (\")Hello World!(\");", "document.getElementByName((\")p(\")).innerHTML = (\")Hello World!(\");"],
    q2Answer: "document.getElementById((\")demo(\")).innerHTML = (\")Hello World!(\");"
},
// Q3
Question3: {
    question: "Where is the correct place to insert a JavaScript?",
    q3Choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section"],
    q3Answer: "Both the <head> section and the <body> section"
},

// Q4
Question4: {
    question: "What is the correct syntax for referring to an external script called (\")xxx.js(\")?",
    q4Choices: ["<script src=(\")xxx.js(\")>", "<script href=(\")xxx.js(\")>", "<script name=(\")xxx.js(\")>"],
    q4Answer: "<script src=(\")xxx.js(\")>"
},

// Q5
Question5: {
    question: "The external JavaScript file must contain the <script> tag.",
    q5Choices: ["True", "False"],
    q5Answer: "True"
},

// Q6
Question6: {
    question: "How do you write (\")Hello World(\") in an alert box?",
    q6Choices: ["alert((\")Hello World(\"))", "msg((\")Hello World(\"))", "msgBox((\")Hello World(\"))", "alertBox((\")Hello World(\"))"],
    q6Answer: "alert((\")Hello World(\"))"
},
};

// sense check
console.log("Answer 1 " + questions.Question1.q1Answer)
console.log("Answer 2 " + questions.Question2.q2Answer)
console.log("Answer 3 " + questions.Question3.q3Answer)
console.log("Answer 4 " + questions.Question4.q4Answer)
console.log("Answer 5 " + questions.Question5.q5Answer)
console.log("Answer 6 " + questions.Question6.q6Answer)


