// Array of questions to be displayed with prompts and correct answers
var questions = [
    {
        prompt: "Commonly used data types do not include?\n(1) strings\n(2) booleans\n(3) alerts\n(4) numbers",
        correctanswer: "3"
    },
    {
        prompt: "The condition in an if / else statement is enclosed with___.\n(1) quotes\n(2) curly brackets\n(3) parenthesis\n(4) square brackets",
        correctanswer: "3"
    },
    {
        prompt: "Arrays in JavaScript can be used to store_____.\n(1) numbers and strings\n(2) other arrays\n(3) booleans\n(4) all of the above",
        correctanswer: "4"
    },
    {
        prompt: "String values must be enclosed within _____ when being assigned to variables.\n(1) commas\n(2) curly brackets\n(3) quotes\n(4) parenthesis",
        correctanswer: "3"
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:\n(1) JavaScript\n(2) terminal/bash\n(3) for loops\n(4) console.log",
        correctanswer: "4"
    },
];
//variables to keep track of score
var score = 0;
var currentQuestionIndex = 0;
var timeLimit = 60; // Time limit in seconds
var timer;
//function to start the quiz when the start button is clicked
function startQuiz() {
    // Hide the start button
    document.getElementById("startButton").style.display = "none";
    // Show the question container
    displayQuestion();
    // Start the timer
    startTimer();
    console.log("Quiz started");
}
//function to end the quiz when the end button is clicked
function displayQuestion() {
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = "";
// check to see if there are any questions left
    if (currentQuestionIndex >= questions.length) {
        // if all questions have been answered, show the result container
        endQuiz();
        return;
    }
// Display the next question
    var question = questions[currentQuestionIndex];
    questionContainer.textContent = question.prompt;

    for (var i = 1; i <= 4; i++) {
        var option = document.createElement("button");
        option.textContent = i;
        option.addEventListener("click", function(event) {
            checkAnswer(event.target.textContent);
        });
        questionContainer.appendChild(option);
    }
}
//function to check if the user's answer is correct
function checkAnswer(selectedAnswer) {
    var question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correctanswer) {
        score++;
    } else {
        // Time penalty for wrong answer
        timeLimit -= 10;
    }
//move to the next question
    currentQuestionIndex++;
    //update the score display
    updateScoreDisplay();
    //display the next question
    displayQuestion();
}
//function to start the timer
function startTimer() {
    updateTimerDisplay(); // Update the timer display immediately

    timer = setInterval(function() {
        timeLimit--;
        updateTimerDisplay(); // Update the timer display every second
//check if the time limit has been reached
        if (timeLimit <= 0 || currentQuestionIndex >= questions.length) {
            // End the quiz
            endQuiz();
        }
    }, 1000); // Timer will decrement every 1000ms (1 second)
}

function endQuiz() { //end the quiz
    //clear the timer
    clearInterval(timer);
    // display the the result container
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.textContent = "Quiz is over. Your score: " + score;

    // Allow the user to save initials and score (you can implement this part using input fields and a submit button)
    var initials = prompt("Please enter your initials:");
    var userScore = { initials: initials, score: score };
//store the user's score in local storage
    var highScores = [];
    if (localStorage.getItem("highScores")) {
        highScores = JSON.parse(localStorage.getItem("highScores"));
    }

    highScores.push(userScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Display high scores
    var highScoresContainer = document.getElementById("highScoresContainer");
    highScoresContainer.innerHTML = "High Scores:<br>";

    for (var i = 0; i < highScores.length; i++) {
        highScoresContainer.innerHTML += highScores[i].initials + ": " + highScores[i].score + "<br>";
    }

    // Show the restart button
    var restartButton = document.getElementById("restartButton");
    restartButton.style.display = "block";
}
//function to restart the quiz
function restartQuiz() {
    // Reset variables and score display
    score = 0;
    currentQuestionIndex = 0;
    timeLimit = 60;
    updateScoreDisplay();
    updateTimerDisplay();

    // Hide the restart button and show the start button again
    var restartButton = document.getElementById("restartButton");
    restartButton.style.display = "none";
    
    var startButton = document.getElementById("startButton");
    startButton.style.display = "block";

    // Clear high scores display
    var highScoresContainer = document.getElementById("highScoresContainer");
    highScoresContainer.innerHTML = "";
}



    function updateScoreDisplay() {
    var scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = "Score: " + score;
}
//function to update the timer display
function updateTimerDisplay() {
    var timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = "Time: " + timeLimit + " seconds";
}
//event listener for the start button
document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("restartButton").addEventListener("click", restartQuiz);