
var quizQuestions = [{
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        answer: "<script>"
    },
    {
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
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section"],
        answer: "Both the <head> section and the <body> section"
    },
    {
        question: "What is the correct syntax for referring to an external script called (\")xxx.js(\")?",
        choices: ["<script src=(\")xxx.js(\")>", "<script href=(\")xxx.js(\")>", "<script name=(\")xxx.js(\")>"],
        answer: "<script src=(\")xxx.js(\")>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        question: "How do you write (\")Hello World(\") in an alert box?",
        choices: ["alert((\")Hello World(\"))", "msg((\")Hello World(\"))", "msgBox((\")Hello World(\"))", "alertBox((\")Hello World(\"))"],
        answer: "alert((\")Hello World(\"))"
    }
];

console.log(quizQuestions.length)






