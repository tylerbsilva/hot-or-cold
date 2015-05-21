var randomNumber = Math.floor((Math.random() * 100) + 1);
var guesses = 0;

$(document).ready(function() {

  /*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function() {
    $(".overlay").fadeOut(1000);
  });

	// click on new game - reset
	$(".new").click(function(){
		randomNumber = Math.floor((Math.random() * 100) + 1);
		guesses = 0;
		$("#count").text(guesses);
		$(".guessForm").show();
		$("#feedback").text("Make your Guess!");
		$('#guessList').text('');
	});

	// guess number
	$('#guessButton').click(function() {
		// get input and check if number
		var guess = parseInt($("input[name='userGuess']").val().trim());
		if (guess) {
			// add to count
			guesses+=1;
			$("#count").text(guesses);
			$('#userGuess').val("");
			// check if correct
			if (guess == randomNumber) {
				$("#guessList").append("<li class='correct'>" + guess + "</li>");
				$(".guessForm").hide();
				$("#feedback").text("NICE JOB! The number was " + randomNumber);
			}
			// check if within 10
			else if (randomNumber + 10 >= guess && randomNumber - 10 <= guess) {
				$("#guessList").append("<li>" + guess + "</li>");
				$("#feedback").text("ON FIRE!!!");
			}
			// check if within 25
			else if (randomNumber + 25 >= guess && randomNumber - 25 <= guess) {
				$("#guessList").append("<li>" + guess + "</li>");
				$("#feedback").text("Getting Warmer");
			}
			//check if within 50
			else if (randomNumber + 50 >= guess && randomNumber - 50 <= guess) {
				$("#guessList").append("<li>" + guess + "</li>");
				$("#feedback").text("Lukewarm...");
			}
			// Check if over 50 away...
			else {
				$("#guessList").append("<li>" + guess + "</li>");
				$("#feedback").text("COLD AS ICE.");
			}
		}
	});

	// Prevent default submission
	$('.guessForm').submit( function(e) {
				e.preventDefault();

				return false;
		});
});
