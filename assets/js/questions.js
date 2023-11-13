console.log("this is the question jS")


// 1. creating a list of quiz questions with the:
//     A. questions
//     B. choices 
//     C. answer
//     Maybe this is an array of options
// 2.start the quiz when i click the start quix button
//     A. add an event listener where it calls a function that then displays the questions and choices on the page
//     B. i need to make the initial start quiz button and text disapper - display none, or hide() - is there a JS mthod fot that?
//     C. display the title for the quiz
//      Iterate through an array of quizzes, diplsya the question itself from an array . content maybe
//     D.display the choice the user has for the quizes - this maybe another array, maybe another loop and diplaying textContent

// Question 1:
// Inside which HTML element do we put the JavaScript?

// <script>    Your answer  
// <javascript>
// <js>
// <scripting>

// Question 2:
// What is the correct JavaScript syntax to change the content of the HTML element below?

// <p id="demo">This is a demonstration.</p>

// document.getElementById("demo").innerHTML = "Hello World!";    Your answer  
// #demo.innerHTML = "Hello World!";
// document.getElement("p").innerHTML = "Hello World!";
// document.getElementByName("p").innerHTML = "Hello World!";


// Question 3:
// Where is the correct place to insert a JavaScript?

// The <body> section    Your answer  
// The <head> section
// Both the <head> section and the <body> section are correct  

// Question 4:
// What is the correct syntax for referring to an external script called "xxx.js"?

// <script src="xxx.js">    Your answer  
// <script href="xxx.js">
// <script name="xxx.js">

// Question 5:
// The external JavaScript file must contain the <script> tag.

// True    Your answer  
// False  

// uestion 6:
// How do you write "Hello World" in an alert box?

// alert("Hello World");    Your answer  
// msg("Hello World");
// msgBox("Hello World");
// alertBox("Hello World");

// list of questions with choices and answers


// var questions 
//     // Q1
// { Question: "Inside which HTML element do we put the JavaScript?" ,
// // // var q1Choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
// // var q1Choices: ["script", "javascript", "js", "scripting"],
// // var milks = ['2%', 'Whole', 'Oat', 'Coconut', 'Soy'];
// food: ['Bagel', 'Danish', 'Muffin'],
// // Answer: (questions.Choices[0]);
// // console.log(questions.q1Choices[0]);
// };
// console.log('You can choose from the following size options: ' + questions.food[0]);

// var questions = {
//     Question: "Inside which HTML element do we put the JavaScript?",
//     q1Choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
//     Answer: (questions.q1Choices[0]),
//   };
//   console.log('You can choose from the following size options: ' + questions.q1Choices[0]);

  var questions = {
    // Q1
    Question: "Inside which HTML element do we put the JavaScript?",
    q1Choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
    // A1
  };
  var q1Answer = questions.q1Choices[0];
// answer check
  console.log(q1Answer);

