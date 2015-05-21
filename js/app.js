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
	$(document).on('click', '#guessButton', function() {
		// check if it's close
		var guess = parseInt($("input[name='userGuess']").val().trim());
		if (guess) {
			guesses+=1;
			$("#count").text(guesses);
			$('#userGuess').val("");
			if (guess == randomNumber) {
				$("#guessList").append("<li class='correct'>" + guess + "</li>");
				$(".guessForm").hide();
				$("#feedback").text("NICE JOB!");
			}	else if (guess > randomNumber) {
				$("#guessList").append("<li>" + guess + "</li>");
				$("#feedback").text("Try Again");
			} else if (guess < randomNumber) {
				$("#guessList").append("<li>" + guess + "</li>");
				$("#feedback").text("Try Again");
			} else {
			}
		}
	});

	// Prevent default submission
	$('.guessForm').submit( function(e) {
				e.preventDefault();

				return false;
		});
});
