// vars
var startButton = document.getElementById('start-quiz');

var quizBox= document.getElementById('quiz-box');
var quizText = document.getElementById('quiz-text');
var quizSubtitle = document.getElementById('quiz-subtitle');





// Quiz Questions
var quizQuestions = [ // items in this array generated via Chat GPT
    {
      question: "What is the correct syntax to declare a JavaScript variable?",
      options: [
        "a) variable x;",
        "b) var x;",
        "c) x = var;",
        "d) int x;"
      ],
      answer: 1 // Index of the correct option in the 'options' array
    },
    {
      question: "Which of the following is a valid way to comment in JavaScript?",
      options: [
        "a) <!-- This is a comment -->",
        "b) /* This is a comment */",
        "c) // This is a comment",
        "d) # This is a comment"
      ],
      answer: 2
    },
    {
      question: "What does the === operator do in JavaScript?",
      options: [
        "a) Assigns a value to a variable",
        "b) Checks if two values are equal, including their types",
        "c) Compares two values and ignores their types",
        "d) Checks if two values are not equal"
      ],
      answer: 1
    },
    {
      question: "How do you access the length of an array called myArray in JavaScript?",
      options: [
        "a) myArray.size",
        "b) myArray.length",
        "c) myArray.count",
        "d) myArray.size()"
      ],
      answer: 1
    },
    {
      question: "Which method is used to add a new element to the end of an array?",
      options: [
        "a) push()",
        "b) unshift()",
        "c) pop()",
        "d) shift()"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the querySelector() method in JavaScript?",
      options: [
        "a) Selects the first element with a specific class",
        "b) Selects the first element with a specific tag name",
        "c) Selects the first element with a specific ID",
        "d) Selects all elements that match a specific CSS selector"
      ],
      answer: 3
    },
    {
      question: "How do you declare a function in JavaScript?",
      options: [
        "a) function myFunction()",
        "b) function = myFunction()",
        "c) function: myFunction()",
        "d) myFunction() => function"
      ],
      answer: 0
    },
    {
      question: "What does the NaN value represent in JavaScript?",
      options: [
        "a) Not a Number",
        "b) Null and None",
        "c) Negative Answer Number",
        "d) No Assigned Name"
      ],
      answer: 0
    },
    {
      question: "What does the setTimeout() function do in JavaScript?",
      options: [
        "a) Pauses the execution of the program for a specified duration",
        "b) Sets a timer to execute a function after a specified delay",
        "c) Stops the execution of the program",
        "d) Returns the current date and time"
      ],
      answer: 1
    },
    {
      question: "How do you convert a string to an integer in JavaScript?",
      options: [
        "a) parseInt()",
        "b) parseFloat()",
        "c) toString()",
        "d) toFixed()"
      ],
      answer: 0
    }
  ];
  


// function for displaying quiz questions


//Event listener for start quiz button

startButton.addEventListener('click', function(){
    displayQuizQuestion(); // will start with the first item in quiz array
});


