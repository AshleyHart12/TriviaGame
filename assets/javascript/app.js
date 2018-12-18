$(document).ready(function() {

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

    var number = 60;
var intervalId;

startGame = $("#startGame").on("click", function() {
    $("#questionBox").text(questions);
    

function run() {
    intervalId = setInterval(decrement, 1000);
}


function decrement() {
    number--;
    $("#timer").text(number);
}

run();

    console.log(questions)

});
})