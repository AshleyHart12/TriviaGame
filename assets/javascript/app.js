    $(document).ready(function() {
        // When page loads, show instructions, but hide everything else
        $("#timer").hide();
        $("#cfQuiz").hide();
        $("#button2").hide();
        $("#results").hide();

        // Set the amount of time at the beginning of the timer
        var secondsLeft = 5;
        
        // Build Timer Function
        function startTimer() {
            if (secondsLeft === 0) {
                alert("Time's Up!");
                $("#cfQuiz").hide();
                $("#button2").hide();
                $("#results").show();
            }
            else {
                secondsLeft--;
                setTimeout(startTimer, 1000);
                $("#timer").text("Time Remaining: " + secondsLeft);
                console.log(secondsLeft);
            }
            
            }
                    
            
          
        
         // Press Start button, show & start timer countdown, show all questions, hide instructions
         $("#startGame").on("click", function () {
        startTimer();
        $("#timer").show();
        $("#cfQuiz").show();
        $("#button2").show();
        $("#button").hide();
        $("#instructions").hide();
                          
         })
        
          var winner =0;

        $('#Castro', '#glassman', '#1998', '#Aromas', '#Froning').one("click", function() {
            winner++;
        })
                
        // When timer is up, or the submit button is pressed, hide questions and timer, show result box
        $("#button2").on("click", function() {
        $("#cfQuiz").hide();
        $("#button2").hide();
        $("#results").html(winner)
           
        })
        
    }) // Ends Jquery - Keep at bottom
        