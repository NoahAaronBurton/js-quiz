// vars
var startButton = document.getElementById('start-quiz');

var quizBox= document.getElementById('quiz-box');
var quizText = document.getElementById('quiz-text');
var quizSubtitle = document.getElementById('quiz-subtitle');

var questionIndex = 0; // we will always start on the first question

var userChoice;
var userScore = 0;




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
  




// calculate score
function calcFinalScore() {
  alert('You scored ' + userScore + ' points!');
  finalScore = prompt('Enter your initials to join the leader board') + ' ' + userScore 
  console.log(finalScore);
  return finalScore;
  
}

// timer function
 var timeLeft = 10000;
 function startTimer() {
  var timer = document.getElementById('time-left')
  var timerInterval = setInterval(function(){
    timeLeft--;
    timer.textContent = 'Time remaining: ' +timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('times up!');
      calcFinalScore();
    }
  })
 }


// function for displaying quiz questions
function displayQuizQuestion() {
  // clear current quiz box data
  quizText.style.display = 'none';
  quizSubtitle.style.display = 'none';
  startButton.style.display = 'none';
  // get index for current question
  var currentQuestion = quizQuestions[questionIndex]; // references the var declared at the top
  console.log(currentQuestion);

  // create question text
  var newQuizText = document.createElement('h3');
  newQuizText.textContent = currentQuestion.question;
  quizBox.appendChild(newQuizText);

  // create options list
  for (var i = 0; i < currentQuestion.options.length; i++ ) {
    var optionText = currentQuestion.options[i]; // new option text is set to current iteration of the loop

    var optionButton = document.createElement('button'); // create new button for option
    optionButton.textContent = optionText;

    quizBox.appendChild(optionButton);
  }

  // listen for click inside quiz box
  quizBox.addEventListener('click', function(event) {
    var clickedChoice = event.target; // targets and accesses HTML element the user clicks
    //check if what they clicked is a button
    if (clickedChoice.nodeName === 'BUTTON') { // Chat GPT helped me decide to use nodeName property
      userChoice = clickedChoice.textContent.trim();
      console.log(clickedChoice);
      isCorrect(); // execute this function if they click a button
    }


    // check if answer is correct 
    function isCorrect() {
      if (userChoice !== startButton.textContent) {
        var correctAnswer = currentQuestion.options[currentQuestion.answer];
        if (userChoice.trim() === correctAnswer.trim()) {
          quizBox.style.backgroundColor = 'green';
          userScore += 100;
        } else {
          quizBox.style.backgroundColor = 'red';
          timeLeft -= 1000; // takes time off when incorrect answer is given
        }
      }
    }
  });
};





//Event listener for start quiz button
startButton.addEventListener('click', function(){
  
  
    startTimer();
    displayQuizQuestion(); // will start with the first item in quiz array
});


