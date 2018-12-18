
// Questions

 var questions = [
    {
        question: "Who is the founder of Crossfit?",
        answers: ["Rich Froning", "Camille LaBlanc", "Greg Glassman", "Dave Castro"],
        correctAnswer: "Greg Glassman"
    },

    {
        question: "What year was Crossfit started?",
        answers: ["1998", "2000", "2003", "2004"],
        correctAnswer: [1],
    },

    {
        question: "Where were the first Crossfit Games located?",
        answers: ["Aromas, CA", "Irving, CA", "Seattle, WA", "Phoenix, AZ"],
        correctAnswer: [0],
    },

    {
        question: "How has won the most consecutive Crossfit Games?",
        answers: ["Annie Thorisdottir", "Mat Fraser", "Rich Froning", "Katrin Davisdottir"],
        correctAnswer: [2],
    },

    {
        question: "What is a hero workout?",
        answers: ["Competitive workouts to qualify for the games", "Workouts that must be done in a costume", "Workout programmed specifically for your birthday", "Workout to honor fallen service members"],
        correctAnswer: [3],
    }]

$(document).ready(function() {
var secondsLeft = 60;

function startTimer() {
    if (secondsLeft === 0) {
        alert("Game Over!");
    }
    else {
        secondsLeft--;
        setTimeout(startTimer, 1000);
        $("#timer").text("Time Remaining: " + secondsLeft);
        console.log(secondsLeft);
    }
 } 

 $("#startGame").on("click", function () {
     startTimer();
     appendQuestions();
 })

 function appendQuestions() {
    for (var i =0; i <= questions.length; i++) {
       $("#questionBox").text("test"); 
    }
 }


})