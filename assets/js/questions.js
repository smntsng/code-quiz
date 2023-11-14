// list of quiz questions with choices and answers
var quizQuestions = [{
    // Q1
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        answer: "<script>"
    },

    {
    // Q2
        question: "What is the correct JavaScript syntax to change the content of the HTML element: <p id=(\")demo(\")>This is a demonstration.</p>?",
        choices: [
            "document.getElementById((\")demo(\")).innerHTML = (\")Hello World!(\");",
            "#demo.innerHTML = (\")Hello World!(\");",
            "document.getElement((\")p(\")).innerHTML = (\")Hello World!(\");",
            "document.getElementByName((\")p(\")).innerHTML = (\")Hello World!(\");"
        ],
        answer: "document.getElementById((\")demo(\")).innerHTML = (\")Hello World!(\");"
    },

    {
    // Q3
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section"],
        answer: "Both the <head> section and the <body> section"
    },

    {
    // Q4
        question: "What is the correct syntax for referring to an external script called (\")xxx.js(\")?",
        choices: ["<script src=(\")xxx.js(\")>", "<script href=(\")xxx.js(\")>", "<script name=(\")xxx.js(\")>"],
        answer: "<script src=(\")xxx.js(\")>"
    },

    {
        // Q5
        question: "The external JavaScript file must contain the <script> tag.",
        choices: ["True", "False"],
        answer: "True"
    }
];

// sense check
// var Q1 = quizQuestions[4].question;
// console.log(Q1);





