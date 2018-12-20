
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
        correctAnswer: 1
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

    var currentQuestion;


    $(document).ready(function() {
        var secondsLeft = 5;
        
        // Build Timer
        function startTimer() {
            if (secondsLeft === 0) {
                alert("Time's Up!");
            }
            else {
                secondsLeft--;
                setTimeout(startTimer, 1000);
                $("#timer").text("Time Remaining: " + secondsLeft);
                console.log(secondsLeft);
            }
         } 
        
         // Press Start button, start timer countdown and show all questions
         $("#startGame").on("click", function () {
            appendQuestions();
            // startTimer();
             
         })
        
         // Function to show the questions at the start of the game
        function appendQuestions() {

            for (var i =0; i <= questions.length; i++) {
                // var quizContainer = document.createElement('quiz');
                // $("#quiz").append(questions);
                $("#questionBox").append(<div id='question'></div>);
                $("#question").append(questions);
                console.log(questions);
                                           
                           
            }
             

                
            }
           
                
            // When timer is up, hide all questions, show the results
            function showResults(){

            }
         

        

        }) // Ends Jquery - Keep at bottom
        